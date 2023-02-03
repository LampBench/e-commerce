<?php

namespace Database\Seeders;

use App\Models\Author;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class AuthorsSeeder extends Seeder
{
    public function run()
    {
        Author::factory()->count(10)->create();
    }
}
