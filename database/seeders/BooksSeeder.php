<?php

namespace Database\Seeders;

use App\Models\Author;
use App\Models\Book;
use App\Models\Category;
use App\Models\Discount;
use App\Models\Review;
use App\Models\User;
use GuzzleHttp\Promise\Create;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class BooksSeeder extends Seeder
{
    public function run()
    {
        $authors = Author::all();
        $categories = Category::all();
        foreach ($authors as $author) {
            foreach ($categories as $category) {
                $numberOfBooks = rand(1, 5);
                $books = Book::factory()->count($numberOfBooks)->create([
                    'category_id' => $category->id,
                    'author_id' => $author->id
                ]);

                foreach ($books as $book) {
                    if ($book->quantity > 30) {
                        Discount::factory()->create([
                            'book_id' => $book->id
                        ]);
                    }
                }
            }
        }
    }
}
