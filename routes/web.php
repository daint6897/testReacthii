<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    $data = \App\test_table_react::get()->toJson();
    return view('welcome',['data'=>$data]);
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

Route::get('/pusher', function() {
    event(new App\Events\HelloPusherEvent('Hi there Pusher!'));
    return "Event has been sent!";
});

Route::get('/push', function () {
    return view('pusher');
});
Route::get('/about', function () {
    return "ahihi";
});

Route::get('/testForm', function () {
    return view('TestFormReact');
});

Route::get('test_curd', function() {
    return view('Test_curd_react');
});

Route::resource('items', 'ItemController');


//Chat rom
Route::get('chat/{id}', 'ChatsController@index');
Route::get('messages/{id}', 'ChatsController@fetchMessages');
Route::post('messages', 'ChatsController@sendMessage')->name('sendMessages');

// Route::get('chat', 'ChatsController@index');
// Route::get('messages', 'ChatsController@fetchMessages');
// Route::post('messages', 'ChatsController@sendMessage');