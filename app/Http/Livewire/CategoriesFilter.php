<?php

namespace App\Http\Livewire;

use App\Models\Category;
use App\Models\Product;
use Livewire\Component;
use Livewire\WithPagination;



class CategoriesFilter extends Component
{
    public $selectedCategories = [];
    public $selectedClass = null;
    public $categories;
    public $amount = 3;
    public function mount(){
        $this->categories = Category::pluck('title', 'id');
//        $this->products = Product::pluck('title', 'id');
    }

    public function render()
    {
        return view('livewire.categories-filter',[
            'products'=>Product::with('category')
            ->when($this->selectedClass,function ($query){
                $query->where('category_id',$this->selectedClass);
            }),
            'category'=>Category::all(),
        ]);

//        return view('livewire.categories-filter',[
//            'selectedClass'=>$this->selectedClass,
//            'categories'=>$this->categories,
//            'products'=>Product::pluck('title', 'id'),
//        ])->when($this->selectedClass,function ($query){
//            $query->where('category_id',$this->selectedClass);
//        });
    }
    public function filterCategories($id){
        if (($key = array_search($id,$this->selectedCategories)) !== false){
            unset($this->selectedCategories[$key]);
        }else{
            $this->selectedCategories[] = $id;
        }
    }
}

