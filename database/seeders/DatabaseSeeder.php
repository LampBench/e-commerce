<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    public function run()
    {
        $this->call([
            CategoriesSeeder::class,
            ManufacturersSeeder::class,
            ProductsSeeder::class,
            UserGroupSeeder::class,
        ]);
    }
}
