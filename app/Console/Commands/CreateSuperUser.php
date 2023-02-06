<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class CreateSuperUser extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'make:superuser';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $this->info('Creating super user...');
        $user = User::factory()->create([
            'first_name' => 'Admin',
            'last_name' => 'User',
            'email' => 'admin@email.com',
            'password' => Hash::make('Admin@Password'),
        ]);
        // Send info of the user to the console
        $this->info('Super user created!');
        $this->info('First name: ' . $user->first_name);
        $this->info('Last name: ' . $user->last_name);
        $this->info('Email: ' . $user->email);
        $this->info('Password: Admin@Password');
    }
}
