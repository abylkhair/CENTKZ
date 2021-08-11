<?php

namespace App\Http\Livewire;

use App\Models\Category;
use Livewire\Component;
use App\Models\Product;

class Products extends Component
{

    public $amount = 1;
    public function render()
    {
        return view('livewire.product',[
            "products"=>Product::query()->paginate($this->amount),
            "categories"=>Category::query()->paginate($this->amount)
        ]);
    }
    public function load(){
        $this->amount +=1;
    }
}
