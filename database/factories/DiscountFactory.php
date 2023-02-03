<?php

namespace Database\Factories;

use App\Models\Discount;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Carbon;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Discount>
 */
class DiscountFactory extends Factory
{
    protected $model = Discount::class;

    public function definition()
    {
        $date = Carbon::now()->add($this->faker->randomElement([
            '-1 week',
            '+1 week',
            '+3 days',
            '-5 days',
            '+1 month',
            '-2 months',
        ]));
        $startDate = $date->toDateString();
        $endDate = null;
        if ($this->faker->boolean(30)) {
            $endDate = $date->add($this->faker->randomElement([
                '3 days',
                '1 month',
                '7 days',
                '1 week',
                '2 weeks',
            ]))->toDateString();
        }

        return [
            'discount_start_date' => $startDate,
            'discount_end_date' => $endDate,
            'type' => $this->faker->randomElement([1, 2]),
            'discount_value' => $this->faker->randomFloat(2, 9, 28),
        ];
    }
}
