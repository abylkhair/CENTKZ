@foreach($products as $product)
    <div class="col-lg-4 col-md-6 mb-5 forproduct-item" style="display: block;">
        <div class="product-item">
            <a href="/product/{{$product->id}}"><figure>
                    <img src="{{$product->getImage()}}" alt="Image" class="img-fluid">
                </figure></a>
            <div class="px-4">
                <h3><a href="/product/{{$product->id}}">{{$product->title}}</a></h3>
                <div class="mb-3">
                    <!--<span class="meta-icons mr-3"><a href="#" class="mr-2"><span class="icon-star text-warning"></span></a> 5.0</span>
                    <span class="meta-icons wishlist"><a href="#" class="mr-2"><span class="icon-heart"></span></a> 29</span>-->
                </div>
                <p class="mb-4 fordesk">{{$product->short_desc}}</p>
                <div>
                    <a href="/product/{{$product->id}}" class="btn btn-black mr-1 rounded-0 readmore readmoresm" target="_blank">ПЕРЕЙТИ НА САЙТ</a>
                    <a href="/product/{{$product->id}}" class="btn btn-black btn-outline-black ml-1 rounded-0 readmore">Подробнее</a>
                </div>
            </div>
        </div>
    </div>
@endforeach
<input type="hidden" name="numberPage" value="{{$products->lastPage()}}">
<input type="hidden" name="countItems" value="{{$products->count()}}">

