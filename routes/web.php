<?php
use Illuminate\Support\Facades\Route;

Route::get('/{any}', function () {
    return view('app'); // File Blade chứa VueJS
})->where('any', '.*');
