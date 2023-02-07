<?php

namespace App\Repositories;

use App\Classes\ExpandedBaseRepository;
use App\Models\Category;

class CategoryRepository extends ExpandedBaseRepository
{
    protected $model;

    public function __construct(Category $model)
    {
        $this->model = $model;
    }
}
