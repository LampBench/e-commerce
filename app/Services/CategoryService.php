<?php

namespace App\Services;

use App\Classes\BaseService;
use App\Repositories\CategoryRepository;

class CategoryService extends BaseService
{
    protected $repository;

    public function __construct(CategoryRepository $repository)
    {
        $this->repository = $repository;
    }
}
