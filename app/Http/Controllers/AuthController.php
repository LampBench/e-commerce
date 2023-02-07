<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use App\Http\Requests\CreateUserRequest;
use App\Services\AuthService;
use App\Services\UserService;
use App\Traits\RespondsWithHttpStatus;

class AuthController extends Controller
{
    use RespondsWithHttpStatus;

    protected $authService;
    protected $userService;

    public function __construct(AuthService $authService, UserService $userService)
    {
        $this->middleware('auth:api', ['except' => ['login', 'register']]);
        $this->authService = $authService;
        $this->userService = $userService;
    }

    public function login(LoginRequest $request)
    {
        $auth = $this->authService->login($request->only('email', 'password'));
        if (!$auth) {
            return $this->respondUnauthorized();
        }

        return $this->respondWithSuccess($auth, 'Register successful');
    }

    public function register(CreateUserRequest $request)
    {
        $user = $this->userService->create($request->all());
        if (!$user) {
            return $this->respondWithError('Register failed');
        }

        return $this->respondWithSuccess($user, 'Register successful', 201);
    }
}
