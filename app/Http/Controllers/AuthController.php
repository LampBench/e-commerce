<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use App\Services\AuthService;
use App\Traits\RespondsWithHttpStatus;

class AuthController extends Controller
{
    use RespondsWithHttpStatus;

    protected $service;
    
    public function __construct(AuthService $service)
    {
        $this->service = $service;
        $this->middleware('auth:api', ['except' => ['login', 'register']]);
    }

    public function login(LoginRequest $request)
    {
        $auth = $this->service->login($request->only('email', 'password'));
        if (!$auth) {
            return $this->respondUnauthorized();
        }

        return $this->respondWithSuccess($auth, 'Login successful');
    }
}
