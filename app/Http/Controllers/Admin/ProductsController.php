<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Product;
use Illuminate\Http\Request;

class ProductsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $products = Product::all();
        return view('admin.products.index',compact('products'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $categories = Category::pluck('title','id')->all();
        $products = Product::pluck('title','id')->all();

        return view('admin.products.create',compact('categories','products'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->validate($request,[
            'title'=>'required',
            'content'=>'required',
            'date'=>'required',
            'image'=>'nullable|image',
            'price'=>'required'
        ]);
//        dd($request->all());
        $product = (new \App\Models\Product)->add($request->all());
        $files = $request->file('image');
        if($request->hasFile('attachment'))
        {
            foreach ($files as $product) {
                $product-> uploadImage($request->file('image'));

            }
        }
        $product->price = $request->price;
        $product-> setCategory($request->get('category_id'));
        $product-> setProducts($request->get('products'));
//        $product->setProducts($request)->get('products');
        $product->toggleStock($request->get('in_stock'));
        return redirect()->route('products.index');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $product = Product::find($id);
        $categories = Category::pluck('title','id')->all();

        return view('admin.products.edit',compact('categories','product'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $this->validate($request,[
            'title'=>'required',
            'content'=>'required',
            'date'=>'required',
            'image'=>'required|image',
        ]);
        $product = Product::find($id);
        $product->edit($request->all());
        $product -> uploadImage($request->file('image'));
        $product->setCategory($request->get('category_id'));
        $product->toggleStock($request->get('in_stock'));

        return redirect()->route('products.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Product::find($id)->remove();
        return redirect()->route('products.index');
    }
}
