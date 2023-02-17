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

    public function create(array $data)
    {
        $discountsOfProduct = Discount::where('product_id', '=', $data['product_id'])
            ->where(function ($query) use ($data) {
                $query->where('end_date', '>=', $data['start_date'])
                    ->orWhereNull('end_date');
            })
            ->count();
        if ($discountsOfProduct > 0) {
            return false;
        }
        return $this->repository->create($data);
    }
}
