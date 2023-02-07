<?php

namespace App\Services;

use App\Classes\ExpandedBaseService;
use App\Repositories\CategoryRepository;

class CategoryService extends ExpandedBaseService
{
    protected $repository;

    public function __construct(CategoryRepository $repository)
    {
        $this->repository = $repository;
    }
}
