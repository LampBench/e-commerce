<?php

namespace App\Repositories;

use App\Classes\BaseRepository;
use App\Models\Category;

class CategoryRepository extends BaseRepository
{
    protected $model;

    public function __construct(Category $model)
    {
        $this->model = $model;
    }
}
