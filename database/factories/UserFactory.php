<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\User>
 */
class UserFactory extends Factory
{
    protected $model = User::class;

    public function definition()
    {
        $firstName = $this->faker->unique()->firstName();
        $lastName = $this->faker->name();
        $email = strtolower($firstName) . '.' . str_replace(' ', '', strtolower($lastName)) . '@email.com';
        $password = $firstName . str_replace(' ', '', $lastName) . '@Password';
        return [
            'first_name' => $firstName,
            'last_name' => $lastName,
            'email' => $email,
            'password' => Hash::make($password), // first_name + last_name + @Password
        ];
    }
}
