<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Seeder;

class CategoriesSeeder extends Seeder
{
    public function run()
    {
        $superiorCategories = Category::factory()->count(3)->create();
        foreach ($superiorCategories as $superiorCategory) {
            Category::factory()->count(5)->create([
                'parent_id' => $superiorCategory->id
            ]);
        }
    }
}
