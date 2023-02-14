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

    public function create(array $data)
    {
        return $this->repository->create($data);
    }

    public function delete($id)
    {
        return $this->repository->delete($id);
    }
}
