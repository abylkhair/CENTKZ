<?php

use App\Http\Controllers\Admin\AdminController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\CategoriesController;
use App\Http\Controllers\admin\ProductsController;
use App\Http\Controllers\ProductssController;
use App\Http\Controllers\HomeController;
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

//Route::get('/', function () {
//    return view('products.index');
//});
Route::get('/admin',[AdminController::class,'index']);
Route::get('/',[HomeController::class,'index']);
//Route::get('/admin/categories',[CategoriesController::class, 'index'])->name('categories.index');
//Route::get('/admin/categories/create',[CategoriesController::class, 'create'])->name('categories.create');
//Route::post('/admin/categories/store',[CategoriesController::class, 'store'])->name('categories.store');
//Route::get('/admin/categories/edit/{id}',[CategoriesController::class, 'edit'])->name('categories.edit');
//Route::put('/admin/categories/update/{id}',[CategoriesController::class, 'update'])->name('categories.update');
//Route::delete('/admin/categories/destroy/{id}',[CategoriesController::class, 'destroy'])->name('categories.destroy');
Route::resource('admin/categories',CategoriesController::class);
Route::resource('admin/products',ProductsController::class);
//Route::delete('/admin/products/destroy/{id}',[ProductsController::class, 'destroy'])->name('products.destroy');
Route::get('/livewire',App\Http\Livewire\Products::class);
Route::get('/get-products/{category_id}',[HomeController::class,'get_products']);
Route::get('product/{id}',[HomeController::class,'show'])->name('product.show');
//Route::post('mailsend',);
