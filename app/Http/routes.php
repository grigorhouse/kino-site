<?php

/*
|--------------------------------------------------------------------------
| Routes File
|--------------------------------------------------------------------------
|
| Here is where you will register all of the routes in an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/
Route::group(['middleware' => ['Illuminate\Session\Middleware\StartSession']], function () {
	Route::get('/', function () {
	    return view('welcome');
	});

	Route::resource('/movie', 'MoviesController');
	Route::resource('/category', 'CategoryController');
	Route::get('/check', 'UserController@check');
	Route::resource('/user', 'UserController');
	Route::post('/login', 'UserController@login');
	Route::get('/logout', 'UserController@logout');
});


/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| This route group applies the "web" middleware group to every route
| it contains. The "web" middleware group is defined in your HTTP
| kernel and includes session state, CSRF protection, and more.
|
*/

Route::group(['middleware' => ['auth']], function () {
    
});
