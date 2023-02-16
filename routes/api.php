<?php

use App\Http\Controllers\CategoryController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\DiscountController;
use App\Http\Controllers\GroupController;
use App\Http\Controllers\ManufacturerController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\VoucherController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::apiResource('users', UserController::class)->middleware(['auth:api', 'can:users']);
Route::apiResource('manufacturers', ManufacturerController::class)->middleware(['auth:api', 'can:manufacturers']);
Route::apiResource('categories', CategoryController::class)->middleware(['auth:api', 'can:categories']);
Route::apiResource('products', ProductController::class);
Route::apiResource('discounts', DiscountController::class);
Route::apiResource('vouchers', VoucherController::class);

// Authenticated routes
Route::controller(AuthController::class)->group(function () {
    Route::post('login', 'login');
    Route::post('register', 'register');
    Route::post('logout', 'logout')->middleware('auth:api');
    Route::post('refresh', 'refresh')->middleware('auth:api');
    Route::get('me', 'me')->middleware('auth:api');
});

// User groups
Route::middleware('auth:api')->get('groups/modules', [GroupController::class, 'getModules']);
Route::middleware('auth:api')->apiResource('groups', GroupController::class);
