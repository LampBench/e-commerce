<?php

namespace App\Repositories;

use App\Classes\ExpandedBaseRepository;
use App\Models\Discount;

class DiscountRepository extends ExpandedBaseRepository
{
    protected $model;

    public function __construct(Discount $model)
    {
        $this->model = $model;
    }

    public function getModelDetails()
    {
        return $this->model
            ->getAllDetails()
            ->getDiscountAmount();
    }
}
