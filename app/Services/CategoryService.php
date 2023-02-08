<?php

namespace App\Services;

use App\Classes\ExpandedBaseService;
use App\Repositories\CategoryRepository;

class CategoryService extends ExpandedBaseService
{
    public function __construct(CategoryRepository $repository)
    {
        $this->repository = $repository;
    }
}
