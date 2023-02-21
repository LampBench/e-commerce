<?php

namespace App\Repositories;

use App\Classes\ExpandedBaseRepository;
use App\Models\Product;

class ProductRepository extends ExpandedBaseRepository
{
    public function __construct(Product $model)
    {
        $this->model = $model;
    }

    public function getModelDetails()
    {
        return $this->model
            ->getAllDetails()
            ->getFinalPrice()
            ->getDiscountAmount()
            ->getAverageRatingStar()
            ->getNumberOfReviews();
    }
}
