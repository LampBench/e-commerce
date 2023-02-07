<?php

namespace App\Services;

use App\Repositories\AuthRepository;
use Illuminate\Support\Facades\Auth;

class AuthService
{
    protected $repository;

    public function __construct(AuthRepository $repository)
    {
        $this->repository = $repository;
    }

    public function login($credentials)
    {
        $token = Auth::attempt($credentials);
        if (!$token) {
            return false;
        }
        $user = Auth::user();
        return [
            'user' => $user,
            'authorisation' => [
                'token_type' => 'bearer',
                'expires_in' => Auth::factory()->getTTL() * 60,
                'token' => $token,
            ]
        ];
    }
}
