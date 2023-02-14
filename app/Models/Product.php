<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Carbon;

class Product extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $model = 'products';
    public $timestamps = false;

    public const DISCOUNT_AMOUNT_FORMULA = 'discounts.value / POWER(100, CAST(discounts.type AS INT) - 1) * POWER(products.price, CAST(discounts.type AS INT) - 1)';

    public function discounts()
    {
        return $this->hasMany(Discount::class, 'product_id');
    }

    public function scopeGetAllDetails($query)
    {
        return $query
            ->leftJoin('reviews', 'products.id', '=', 'reviews.product_id')
            ->leftJoin('discounts', 'products.id', '=', 'discounts.product_id')
            ->leftJoin('categories', 'products.category_id', '=', 'categories.id')
            ->leftJoin('manufacturers', 'products.manufacturer_id', '=', 'manufacturers.id')
            ->select(
                'products.id',
                'products.name',
                'products.quantity',
                'products.cover_photo',
                'products.status',
                'products.price',
                'manufacturers.name as manufacturer_name',
                'categories.name as category_name'
            )
            ->groupBy(
                'products.id',
                'discounts.value',
                'discounts.type',
                'discounts.start_date',
                'discounts.end_date',
                'reviews.rating_star',
                'manufacturers.name',
                'categories.name'
            );
    }

    public function scopeGetFinalPrice($query)
    {
        return $query->selectRaw("(CASE 
            WHEN discounts.value = NULL THEN 0
            ELSE CASE
                WHEN discounts.start_date > CURRENT_DATE THEN 0
                ELSE CASE
                    WHEN discounts.end_date = NULL THEN products.price - " . Product::DISCOUNT_AMOUNT_FORMULA . "
                    ELSE CASE
                        WHEN discounts.end_date >= CURRENT_DATE THEN products.price - " . Product::DISCOUNT_AMOUNT_FORMULA . "
                        ELSE 0
                        END
                    END
                END
            END) AS final_price");
    }

    public function scopeGetDiscountAmount($query)
    {
        return $query->selectRaw("(CASE 
            WHEN discounts.value = NULL THEN 0
            ELSE CASE
                WHEN discounts.start_date > CURRENT_DATE THEN 0
                ELSE CASE
                    WHEN discounts.end_date = NULL THEN " . Product::DISCOUNT_AMOUNT_FORMULA . "
                    ELSE CASE
                        WHEN discounts.end_date >= CURRENT_DATE THEN " . Product::DISCOUNT_AMOUNT_FORMULA . "
                        ELSE 0
                        END
                    END
                END
            END) AS discount_amount");
    }

    public function scopeGetAverageRatingStar($query)
    {
        return $query->selectRaw("AVG(COALESCE(reviews.rating_star, 0)) AS average_rating_star");;
    }

    public function scopeGetNumberOfReviews($query)
    {
        return $query->selectRaw("COUNT(reviews.rating_star) AS number_of_reviews");
    }
}
