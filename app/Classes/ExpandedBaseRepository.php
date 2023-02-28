<?php

namespace App\Classes;

use Illuminate\Support\Facades\DB;

abstract class ExpandedBaseRepository extends BaseRepository
{
    public function getModel()
    {
        return $this->model;
    }

    public function getModelDetails()
    {
        return $this->model->getAllDetails();
    }

    public function applySortFilterSearch($requestData)
    {
        $items = $this->getModelDetails();
        $items = $this->sort($items, $requestData);
        $items = $this->filter($items, $requestData);
        $items = $this->search($items, $requestData['search']);
        $items = $this->relatedModelFilter($items, $requestData);
        return $requestData['perPage'] == 'all' ? $items->get() : $items->paginate($requestData['perPage']);
    }

    public function sort($query, $requestData)
    {
        if ($requestData['sort']->custom) {
            foreach ($requestData['sort']->fields as $field) {
                $query->orderBy($field[0], $this->getSortOrderForCustomSort($field[1], $requestData['order']));
            }
            return $query;
        }
        return $query->orderBy($requestData['sort']->field, $requestData['order'])
            ->orderBy($requestData['table'] . '.id');
    }

    public function getSortOrderForCustomSort($defaultOrder, $paramOrder)
    {
        if ($paramOrder == 'desc') {
            return $defaultOrder == 'asc' ? 'desc' : 'asc';
        }
        return $defaultOrder;
    }

    public function filter($query, $requestData)
    {
        return $query->where(function ($query) use ($requestData) {
            foreach ($requestData['filter'] as $field => $values) {
                $query->where(function ($query) use ($field, $values) {
                    foreach ($values as $value) {
                        $query->orWhere(DB::raw($field), $value);
                    }
                });
            }
        });
    }

    public function search($query, $searchData)
    {
        return $query->where(function ($query) use ($searchData) {
            foreach ($searchData['fields'] as $field) {
                $query->orWhere(DB::raw($field), 'LIKE', '%' . $searchData['value'] . '%');
            }
        });
    }

    public function relatedModelFilter($query, $requestData)
    {
        return $query->where(function ($query) use ($requestData) {
            foreach ($requestData['relatedModelFilters'] as $field => $relatedModelFilter) {
                $query = $query->whereHas($relatedModelFilter->condition[0], function ($query) use ($relatedModelFilter) {
                    $query->where(function ($query) use ($relatedModelFilter) {
                        foreach ($relatedModelFilter->values as $value) {
                            $query->orWhere($relatedModelFilter->condition[1], "=", $value);
                        }
                    });
                });
            }
        });
    }
}
