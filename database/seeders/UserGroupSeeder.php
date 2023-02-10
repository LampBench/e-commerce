<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

class UserGroupSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $modulePermissions = array('create', 'view', 'update', 'delete');
        $adminPermissions = array(
            'dashboard' => ['view']
        );
        $modules = config('modules');
        foreach ($modules as $module) {
            $adminPermissions[$module['name']] = $modulePermissions;
        }
        $adminId = DB::table('user_groups')->insertGetId([
            'name' => 'Administrator',
            'description' => 'Admin group',
            'permissions' => json_encode($adminPermissions),
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s')
        ]);

        $staffId = DB::table('user_groups')->insertGetId([
            'name' => 'Staff',
            'description' => 'Staff group',
            'permissions' => json_encode(array()),
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s')
        ]);

        if ($adminId) {
            DB::table('users')->insertGetId([
                'first_name' => 'Administrator',
                'last_name' => 'User',
                'email' => 'admin@email.com',
                'password' => Hash::make('Admin@Password'),
                'user_group_id' => $adminId
            ]);
        }

        if ($staffId) {
            User::factory()->count(10)->create([
                'user_group_id' => $staffId
            ]);
        }
    }
}
