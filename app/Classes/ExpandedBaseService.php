<?php

namespace App\Classes;

use App\Traits\ApplySortFilterSearch;

abstract class ExpandedBaseService extends BaseService
{
    use ApplySortFilterSearch;

    public function getSortOrder($requestData)
    {
        $requestOrder = $requestData['order'] ?? 'asc';
        $sortOrder = $requestOrder === 'desc' ? $requestOrder : 'asc';
        return $sortOrder;
    }

    public function getSortField($requestData, $table)
    {
        $defaultSortField = config('constants.' . $table . '.default.sort');
        $requestSort = $requestData['sort'] ?? $defaultSortField;
        $sortFields = config('constants.' . $table . '.sortFields');
        $sortField = in_array($requestSort, $sortFields) ? $requestSort : $defaultSortField;
        return str_replace('-', '_', $sortField);
    }

    public function getQueryField($field, $table)
    {
        $extraFields = config('constants.' . $table . '.extraFields');
        $nonStringFields = config('constants.nonStringFields');
        $field = $extraFields[$field] ?? $field;
        $field = in_array(str_replace($table . '.', '', $field), $nonStringFields) ? $field : 'LOWER(' . $field . ')';
        return str_replace('-', '_', $field);
    }

    public function getSearchData($requestData, $table)
    {
        $requestSearch = $requestData['search'] ?? null;
        $searchFields = config('constants.' . $table . '.searchFields');
        $searchData = array(
            'fields' => array(),
            'value' => strtolower($requestSearch)
        );
        foreach ($searchFields as $field) {
            $field = $this->getQueryField($field, $table);
            array_push($searchData['fields'], $field);
        }
        return $searchData;
    }

    public function getFilterData($requestData, $table)
    {
        $filterFields = config('constants.' . $table . '.filterFields');
        $filterData = array();
        foreach ($filterFields as $field) {
            if (isset($requestData[$field])) {
                $values = explode(' ', strtolower($requestData[$field]));
                $field = $this->getQueryField($field, $table);
                $filterData[$field] = $values;
            }
        }
        return $filterData;
    }

    public function getPerPage($requestData, $table)
    {
        $perPage = $requestData['per-page'] ?? config('constants.' . $table . '.default.perPage');
        $perPage = (int) $perPage > 1 ? $perPage : config('constants.' . $table . '.default.perPage');
        return $perPage;
    }

    public function getRequestData($request, $table)
    {
        $requestData = $request->all();
        $requestData['order'] = $this->getSortOrder($requestData);
        $requestData['sort'] = $this->getSortField($requestData, $table);
        $requestData['search'] = $this->getSearchData($requestData, $table);
        $requestData['filter'] = $this->getFilterData($requestData, $table);
        $requestData['perPage'] = $this->getPerPage($requestData, $table);
        return $requestData;
    }
}
