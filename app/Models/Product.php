<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Cviebrock\EloquentSluggable\Sluggable;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class Product extends Model
{
    use HasFactory;
    protected $table = 'products';
    use Sluggable;
    protected $fillable = ['title','content', 'price','description','date'];

    public function category(){
        return $this->belongsTo(Category::class);
    }
    public function products(){
        return $this->belongsToMany(
            Product::class,
                    'recommend_product',
            'product_id',
            'recommend_id'
            );
    }

    public function sluggable()
    {
        return [
            'slug' => [
                'source' => 'title'
            ]
        ];
    }

    public function add($fields){
        $product = new Product();
        $product->fill($fields);
//        $product->user_id = 666; // Admin
        $product->save();

        return $product;
    }

    public function edit($fields){
        $this->fill($fields);
        $this->save();
    }
    public function remove(){
        $this->removeImage();
        $this->delete();
    }
    public function uploadImage($image)
    {
        if ($image == null) {
            return;
        }
//        $this->removeImage();
        $filename = Str::random(10). '.' .$image->extension();
        $image->storeAs('uploads',$filename);
        $this->image = $filename;
        $this->save();
    }

    public function removeImage(){
        if ($this->image!=null) {
            Storage::delete('uploads/' . $this->image);
        }
    }
    public function getImage(){
        if ($this->image == null){
            return '/img/no-image.png';
        }
        return '/uploads/'.$this->image;
    }

    public function setCategory($id){
        if ($id == null) {return;}

        $this->category_id = $id;
        $this->save();
    }
    //рекомендуемые
    public function setProducts($ids){
        if ($ids == null) {return;}
        $this->products()->sync($ids);
    }
    public function setDraft(){
        $this->in_stock = 0;
        $this->save();
    }
    public function setPublic(){
        $this->in_stock = 1;
        $this->save();
    }
    public function toggleStock($value){
        if ($value == null){
             return $this->setDraft();
        }
        return $this->setPublic();
    }
    public function setDateAttribute($value){
        $date = Carbon::createFromFormat('d/m/y',$value)->format('Y-m-d');
        $this->attributes['date'] = $date;
    }

    public function getDateAttribute($value){
       $date =  Carbon::createFromFormat('Y-m-d',$value)->format('d/m/y');
       return $date;
    }

    public function getCategoryTitle(){
        if ($this->category != null){
            return $this->category->title;
        }
        return 'Нет категории';
    }
    public function getProductsTitle()
    {
        if ($this->products->count()>0)
        {
            return $this->products->map(function ($product){return $product->title;})->join(',');
        }
        return 'Нет рекомендуемых продуктов';
    }
}
