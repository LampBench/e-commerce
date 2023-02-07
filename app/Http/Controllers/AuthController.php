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

        return $this->respondWithSuccess($auth, 'Login successful', 200);
    }

    public function register(CreateUserRequest $request)
    {
        $user = $this->userService->create($request->all());
        if (!$user) {
            return $this->respondWithError('Register failed');
        }

        return $this->respondWithSuccess($user, 'Register successful', 201);
    }

    public function me()
    {
        $user = $this->authService->me();
        if (!$user) {
            return $this->respondUnauthorized();
        }

        return $this->respondWithSuccess($user);
    }

    public function logout()
    {
        $logout = $this->authService->logout();
        if (!$logout) {
            return $this->respondUnauthorized();
        }

        return $this->respondWithSuccess(null, 'Logout successful', 200);
    }
}
