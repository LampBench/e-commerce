<?php

namespace Database\Seeders;

use App\Models\Product;
use App\Models\Category;
use App\Models\Discount;
use App\Models\Manufacturer;
use Illuminate\Database\Seeder;

class ProductsSeeder extends Seeder
{
    public function run()
    {
        $manufacturers = Manufacturer::all();
        $categories = Category::where('parent_id', '!=', null)->get();
        foreach ($manufacturers as $manufacturer) {
            foreach ($categories as $category) {
                if ($category->level == 4) {
                    if (array_rand([true, false])) {
                        $numberOfProducts = rand(1, 5);
                        $products = Product::factory()->count($numberOfProducts)->create([
                            'category_id' => $category->id,
                            'manufacturer_id' => $manufacturer->id
                        ]);

                        foreach ($products as $product) {
                            if ($product->quantity > 30) {
                                Discount::factory()->create([
                                    'product_id' => $product->id
                                ]);
                            }
                        }
                    }
                }
            }
        }
    }
}
