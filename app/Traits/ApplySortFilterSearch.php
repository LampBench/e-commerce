<?php

namespace App\Traits;

trait ApplySortFilterSearch
{
    public function applySortFilterSearch($request)
    {
        $table = $this->repository->getModel()->getTable();
        $requestData = $this->getRequestData($request, $table);
        return $this->repository->applySortFilterSearch($requestData);
    }
}
