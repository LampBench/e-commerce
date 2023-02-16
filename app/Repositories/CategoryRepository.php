<?php

namespace App\Repositories;

use App\Classes\ExpandedBaseRepository;
use App\Models\Category;

class CategoryRepository extends ExpandedBaseRepository
{
    public function __construct(Category $model)
    {
        $this->model = $model;
    }

    public function applySortFilterSearch($requestData)
    {
        $items = $this->getModelDetails();
        $items = $this->sort($items, $requestData);
        if ($requestData['search']['value'] == "") {
            return $items->whereNull('parent_id')->get();
        }
        $items = $this->search($items, $requestData['search']);
        return $items->get();
    }
}
