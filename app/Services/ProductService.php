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

    public function create(array $data)
    {
        $data['status'] = 1;
        $data['photos'] = implode(',', $data['photos']);
        $product = $this->repository->create($data);
        return $product;
    }
}
