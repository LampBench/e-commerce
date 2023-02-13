<?php

namespace Database\Factories;

use App\Models\Manufacturer;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Author>
 */
class ManufacturerFactory extends Factory
{
    protected $model = Manufacturer::class;

    public function definition()
    {
        return [
            'name' => $this->faker->unique()->name(),
            'description' => $this->faker->text(),
            'phone_number' => $this->faker->unique()->phoneNumber(),
            'email' => $this->faker->unique()->email(),
            'address' => $this->faker->unique()->address(),
            'type' => $this->faker->randomElement([1, 2])
        ];
    }
}
