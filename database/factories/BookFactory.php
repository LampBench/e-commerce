<?php

namespace Database\Factories;

use App\Models\Book;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Book>
 */
class BookFactory extends Factory
{
    protected $model = Book::class;

    public function definition()
    {
        $bookPhotos = [null];
        for ($i = 1; $i <= 10; $i++) {
            array_push($bookPhotos, 'book' . $i);
        }
        return [
            'status' => $this->faker->randomElement([1, 2, 3]),
            'book_title' => $this->faker->text(),
            'book_summary' => $this->faker->text(),
            'book_price' => $this->faker->randomFloat(1, 20, 70),
            'book_cover_photo' => $this->faker->randomElement($bookPhotos),
            'quantity' => $this->faker->numberBetween(1, 50)
        ];
    }
}
