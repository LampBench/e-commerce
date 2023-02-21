<?php

namespace Database\Factories;

use App\Models\Review;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Review>
 */
class ReviewFactory extends Factory
{
    protected $model = Review::class;

    public function definition()
    {
        $rndDate = $this->faker->randomElement([
            '-1 week',
            '-2 weeks',
            '-3 weeks',
            '-1 month',
            '-2 months',
            '-3 months'
        ]);
        return [
            'title' => $this->faker->sentence($this->faker->biasedNumberBetween(3, 6)),
            'details' => $this->faker->paragraphs($this->faker->biasedNumberBetween(3, 6), true),
            'status' => $this->faker->randomElement([1, 2]),
            'date' => $this->faker->dateTimeBetween($rndDate),
            'rating_star' => $this->faker->randomElement(['1', '2', '3', '4', '5'])
        ];
    }
}
