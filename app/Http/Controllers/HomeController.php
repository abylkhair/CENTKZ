<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class HomeController extends Controller
{
    public $amount = 1;
    public function index(){
//        $products = Product::paginate(6);
//        $products = DB::table('products')->first();
        $products = Product::paginate(1);
        $categories = Category::all();
        return view('pages.index',compact('products','categories')); //need to change to normal condition
    }

    public function show($id){
        $product = Product::where('id',$id)->firstOrFail();
        return view('pages.show',compact('product'));
    }

    public function get_products($category_id){
        if ($category_id == 0){
            $products = Product::paginate(1);
        }else {
            $products = Product::where('category_id', '=', $category_id)->paginate(1);
        }
        return view('products.list', [
            'products' => $products,
        ]);
    }

    public function mailsend(Request $request){
            $data = array('name'=>"Virat Gandhi");
            Mail::send('mail.mail', $data, function($message) {
                $message->to($request->name, 'Спасибо за приобретение продукта')->subject
                ('Приобретение продукта CENTKZ');
                $message->from('info@cent.kz','CENT KZ');
            });
            echo "HTML Email Sent. Check your inbox.";

    }

    public function load(){
        $this->amount+=1;
    }

    public function livewire(){
        $products = Product::take($this->amount)->get();
        $categories = Category::all();
        return view('livewire.product',compact('products','categories'));
//        return view('livewire.product');
    }
}
