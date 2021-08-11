<div>
    <script !src="js/app.js"></script>
    <script !src="js/styles.css"></script>

    <div class="container">
        @foreach($categories as $category)
            <div class="form-control">
                <p>{{$category->title}}</p>
            </div>
        @endforeach
        @foreach($products as $product)
            <h1>{{$product->title}}</h1>
            <h1>{{$product->price}}</h1>
        @endforeach
    </div>
    <a wire:click="load" class="btn btn-primary">Load More</a>

</div>
