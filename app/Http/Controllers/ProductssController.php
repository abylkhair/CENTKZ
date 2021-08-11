<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Product;
use Illuminate\Http\Request;
use PhpParser\Node\Expr\PostDec;

class ProductssController extends Controller
{
    public function index(){
        $products = Product::all();
        return view('products.index',compact('products'));
    }
    public function create(){
        $categories = Category::pluck('title','id')->all();
        return view('products.create',compact('categories'));
    }
    public function edit($id){
        $product = Product::find($id);
        $categories = Category::pluck('title','id')->all();

        return view('admin.products.edit',compact('categories','product'));
    }
    public function store(Request $request){
        $this->validate($request,[
            'title'=>'required',
            'content'=>'required',
            'date'=>'required',
            'image'=>'nullable|image'
        ]);
        $product = Product::add($request->all());
        $product->uploadImage($request->file('image'));
        $product->setCategory($request->get('category_id'));
        $product->toggleStock($request->get('in_stock'));

        return redirect()->route('products.index');
    }
    public function update(Request $request){
            $this->validate($request,[
               'title'=>'required',
                'content'=>'required',
                'date'=>'required',
                'image'=>'nullable|image'
            ]);
        $product = Product::add($request->all());
        $product->uploadImage($request->file('image'));
        $product->setCategory($request->get('category_id'));
        $product->toggleStock($request->get('in_stock'));

        return redirect()->route('products.index');
    }
    public function destroy($id){
        Product::find($id)->remove();
        return redirect()->route('products.index');
    }
}
