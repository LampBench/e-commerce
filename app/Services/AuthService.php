<?php

namespace App\Services;

use App\Repositories\AuthRepository;
use Illuminate\Support\Facades\Auth;
use App\Http\Resources\UserResource;
use Illuminate\Support\Facades\Http;

class AuthService
{
    protected $repository;

    public function __construct(AuthRepository $repository)
    {
        $this->repository = $repository;
    }

    public function login($credentials)
    {
        $client = $this->repository->getClients();
        if (!$client) {
            return false;
        }

        $response = Http::asForm()->post('http://127.0.0.1:8001/oauth/token', [
            'grant_type' => 'password',
            'client_id' => $client->id,
            'client_secret' => $client->secret,
            'username' => $credentials['email'],
            'password' => $credentials['password'],
            'scope' => '',
        ]);

        if ($response->failed()) {
            return false;
        }

        $token = $response->json();
        return $token;
    }

    public function me()
    {
        $user = Auth::user();
        if (!$user) {
            return false;
        }

        return [
            'user' => new UserResource($user),
        ];
    }

    public function logout()
    {
        $user = Auth::user();
        $status = $user->token()->revoke();
        return $status;
    }

    public function refresh()
    {
        $client = $this->repository->getClients();
        if (!$client) {
            return false;
        }

        $response = Http::asForm()->post('http://127.0.0.1:8001/oauth/token', [
            'grant_type' => 'refresh_token',
            'refresh_token' => $client->refresh_token,
            'client_id' => $client->id,
            'client_secret' => $client->secret,
            'scope' => '',
        ]);

        if ($response->failed()) {
            return false;
        }

        $token = $response->json();
        return $token;
    }
}
