<?php

namespace App\Services;

use App\Repositories\AuthRepository;
use Illuminate\Support\Facades\Auth;
use App\Http\Resources\UserResource;

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
            'user' => new UserResource($user),
            'token' => $token,
        ];
    }

    public function me()
    {
        $user = Auth::user();
        if (!$user) {
            return false;
        }

        return [
            'user' => new UserResource($user),
            'token' => Auth::getToken(),
        ];
    }

    public function logout()
    {
        $user = Auth::user();
        if (!$user) {
            return false;
        }
        Auth::logout();
        return true;
    }
}
