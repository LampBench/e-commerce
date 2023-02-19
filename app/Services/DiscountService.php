<?php

namespace App\Services;

use App\Classes\ExpandedBaseService;
use App\Models\Discount;
use App\Repositories\DiscountRepository;

class DiscountService extends ExpandedBaseService
{
    public function __construct(DiscountRepository $repository)
    {
        $this->repository = $repository;
    }
}
