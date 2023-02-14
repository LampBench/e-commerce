<?php

namespace App\Services;

use App\Classes\ExpandedBaseService;
use App\Repositories\ProductRepository;

class ProductService extends ExpandedBaseService
{
    public function __construct(ProductRepository $repository)
    {
        $this->repository = $repository;
    }
}
