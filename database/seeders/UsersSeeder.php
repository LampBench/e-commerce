<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UsersSeeder extends Seeder
{
    public function run()
    {
        User::factory()->create([
            'admin' => true
        ]);
        User::factory()->count(10)->create();
    }
}
