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
        return $requestData['perPage'] == 'all' ? $items->get() : $items->paginate($requestData['perPage']);
    }

    public function sort($query, $requestData)
    {
        return $query->orderBy($requestData['sort'], $requestData['order'])
            ->orderBy($requestData['table'] . '.id');
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
}
