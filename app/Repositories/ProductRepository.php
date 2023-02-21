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

    public function getExpireSoonItems($days)
    {
        return $this->model
            ->getExpireSoonItems($days);
    }

    public function applySortFilterSearch($requestData)
    {
        $items = $this->getModelDetails();
        if (isset($requestData['expire']) && $requestData['expire'] >= 1) {
            $items = $items->getExpireSoonItems($requestData['expire']);
        }
        $items = $this->sort($items, $requestData);
        $items = $this->filter($items, $requestData);
        $items = $this->search($items, $requestData['search']);
        if ($requestData['perPage'] == 'all') {
            return $items->get();
        }
        return $items->paginate($requestData['perPage']);
    }
}
