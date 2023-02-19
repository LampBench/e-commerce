<?php

namespace App\Rules;

use App\Models\Discount;
use Illuminate\Contracts\Validation\Rule;

class CheckObjectDoNotHaveDiscount implements Rule
{
    private $start_date;

    /**
     * Create a new rule instance.
     *
     * @return void
     */
    public function __construct($start_date)
    {
        $this->start_date = $start_date;
    }

    /**
     * Determine if the validation rule passes.
     *
     * @param  string  $attribute
     * @param  mixed  $value
     * @return bool
     */
    public function passes($attribute, $value)
    {
        $discountsOfProduct = Discount::where('product_id', '=', $value)
            ->where(function ($query) {
                $query->where('end_date', '>=', $this->start_date)
                    ->orWhereNull('end_date');
            })
            ->count();
        if ($discountsOfProduct > 0) {
            return false;
        }
        return true;
    }

    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message()
    {
        return 'This object has a discount at the moment!';
    }
}
