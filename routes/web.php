<?php

$apiRoute = "/api/";

Route::get('/', function () {
    return view('welcome');
});

Route::group(['middleware' => 'auth'], function() use($apiRoute) {
    Route::resource("$apiRoute/employee", 'EmployeeController');
    Route::resource("$apiRoute/mood", 'MoodController');
    Route::resource("$apiRoute/company", 'CompanyController');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home')->middleware('activation');
Route::get('/verify', 'Auth\AuthController@notActive');
Route::get('/newcode', 'Auth\AuthController@newCode');
Route::get('/verify/{token}', 'Auth\AuthController@activateUser');
