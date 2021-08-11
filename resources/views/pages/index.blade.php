@extends('layout')
@section('content')
<div class="site-section" id="products-section">
    <div class="container">
        <div class="row mb-5 justify-content-center">
            <div class="col-md-6 text-center">
                <h2 class="section-title mb-3">ПОПУЛЯРНЫЕ ПРОДУКТЫ</h2>
                <p>Лучшие предложения в сфере образования, медицины и здоровья, безопасности и благополучия, а также
                    развлечений и досуга</p>
            </div>
        </div>
        <div id="catsdesc">
            <span class="btn btn-link" onclick="changecategory(0)">#Показатьвсе </span>
            @foreach($categories as $category)
                <span class="btn-link" style="cursor: pointer"
                      onclick="changecategory({{$category->id}})">{{$category->title}}</span>
        </div>
        @endforeach
        <input type='hidden' id='catid' value=0>
        <div class="row" id="prodrow">
            @include('products.list')
        </div>
        <p class="text-center col-md-12" id="nextlink"><a class="clickMe" onclick="changecategory()">Показать
                еще</a></p>
        {{--        <p id="nextlink"><a href="javascript:void(0);" class="clickMe" onclick="showmore(6,$(&quot;#thisget&quot;).val())">показать еще</a><input type="hidden" id="thisget" value=""></p>--}}
    </div>
    <div id='prodaj'></div>
</div>
@endsection
