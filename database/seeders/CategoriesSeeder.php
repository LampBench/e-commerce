<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Seeder;

class CategoriesSeeder extends Seeder
{
    public function run()
    {
        $superiorCategories = Category::factory()->count(3)->create([
            'level' => 1
        ]);
        foreach ($superiorCategories as $superiorCategory) {
            $categories = Category::factory()->count(3)->create([
                'parent_id' => $superiorCategory->id,
                'level' => $superiorCategory->level + 1
            ]);
            foreach ($categories as $category) {
                $subordinates = Category::factory()->count(3)->create([
                    'parent_id' => $category->id,
                    'level' => $category->level + 1
                ]);
                foreach ($subordinates as $subordinate) {
                    Category::factory()->count(3)->create([
                        'parent_id' => $subordinate->id,
                        'level' => $subordinate->level + 1
                    ]);
                }
            }
        }
    }
}
