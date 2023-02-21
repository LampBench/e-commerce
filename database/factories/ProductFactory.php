<?php

namespace Database\Factories;

use App\Models\Product;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    protected $model = Product::class;

    public function definition()
    {
        $photos = [null];
        for ($i = 1; $i <= 10; $i++) {
            array_push($photos, 'product' . $i);
        }
        return [
            'status' => $this->faker->randomElement([1, 2, 3]),
            'name' => $this->faker->text(),
            'summary' => $this->faker->text(),
            'price' => $this->faker->randomFloat(1, 20, 150),
            'photos' => $this->faker->randomElement($photos),
            'quantity' => $this->faker->numberBetween(1, 50)
        ];
    }
}
