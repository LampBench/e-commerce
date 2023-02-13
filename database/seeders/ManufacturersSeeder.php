<?php

namespace Database\Seeders;

use App\Models\Manufacturer;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ManufacturersSeeder extends Seeder
{
    public function run()
    {
        Manufacturer::factory()->count(10)->create();
    }
}
