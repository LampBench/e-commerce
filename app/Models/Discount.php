<?php

namespace App\Models;

use App\Traits\GetTable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Discount extends Model
{
    use HasFactory;
    use GetTable;

    protected $table = 'discounts';
    public $timestamps = false;

    public const DISCOUNT_AMOUNT_FORMULA = 'discounts.value / POWER(100, CAST(discounts.type AS INT) - 1) * POWER(products.price, CAST(discounts.type AS INT) - 1)';

    public function scopeGetAllDetails($query)
    {
        return $query
            ->join('products', 'discounts.product_id', '=', 'products.id')
            ->select(
                'discounts.*',
                'products.name as product_name',
                'products.price as product_price',
                'products.quantity as product_quantity'
            );
    }

    public function scopeGetDiscountAmount($query)
    {
        return $query->selectRaw(Discount::DISCOUNT_AMOUNT_FORMULA . ' AS discount_amount');
    }
}
