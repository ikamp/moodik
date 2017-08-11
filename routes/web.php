<?php

$apiRoute = "/api/";

Auth::routes();
Route::group(['middleware' => ['auth', 'activation']], function() use($apiRoute) {
    Route::group(['middleware' => ['manager']], function() use($apiRoute) {
        Route::resource("$apiRoute/employee", 'EmployeeController');
        Route::resource("$apiRoute/company", 'CompanyController');
        Route::get('/mail','WeeklyEmailController@index');
    });
    Route::resource("$apiRoute/mood", 'MoodController');
    Route::get('/home', 'HomeController@index')->name('home');
    Route::get('/verify', 'Auth\AuthController@notActive');
});
Route::get('/init', 'HomeController@init')->middleware('auth');
Route::get('/verify/{token}', 'Auth\AuthController@activateUser');
Route::get('/logout','Auth\LoginController@logout');
Route::get('/newcode', 'Auth\AuthController@newCode');
Route::post('/invite', 'Auth\AuthController@invitedUser');
