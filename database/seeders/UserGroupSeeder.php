<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UserGroupSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $groupId = DB::table('user_groups')->insertGetId([
            'name' => 'Administrator',
            'description' => 'Admin group',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s')
        ]);

        if ($groupId) {
            $userId = DB::table('users')->insertGetId([
                'first_name' => 'Administrator',
                'last_name' => 'User',
                'email' => 'admin@localhost',
                'password' => Hash::make('Admin@Password'),
                'user_group_id' => $groupId
            ]);
        }
    }
}
