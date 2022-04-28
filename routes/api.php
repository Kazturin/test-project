<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\ContactController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;


Route::middleware('auth:sanctum')->group(function () {
    Route::get('/user', function (Request $request) {
        return $request->user();
    });
    Route::get('/user/contacts', function (Request $request) {
        return Auth::user()->contacts()->get();
    });
    Route::get('/users', function () {
        return \App\Models\User::where('id','!=',Auth::user()->id)->get();
    });
    Route::post('contact',[ContactController::class,'store']);
    Route::post('contact/destroy',[ContactController::class,'destroy']);
    Route::post('logout',[AuthController::class,'logout']);
});

Route::post('register',[AuthController::class,'register']);
Route::post('login',[AuthController::class,'login']);

