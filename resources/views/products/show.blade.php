@extends('layout')
@section('content')
    <script !src="js/app.js"></script>
    <script !src="css/styles.css"></script>
    <script !src="public/css/style.css"></script>
    <script !src="public/css/admin.css"></script>
{{--    <link rel="stylesheet" href="css/styles.css" {{\Illuminate\Support\Facades\URL::asset('css/styles.css')}}>--}}
<div class="site-section bg-light">
    <div class="container">
        <div class="row mb-5 justify-content-center">
            <div class="col-md-6 text-center">
                <br>
                <h2 class="section-title mb-3">{{$product->title}}</h2>
                <p>{{$product->shortdesc}}</p>
            </div>
        </div>
        <div class="bg-white py-4 mb-4">
            <div class="row mx-4 my-4 product-item-2 align-items-start">
                <div class="col-md-6 mb-5 mb-md-0">
                    <img src="{{$product->getImage()}}" alt="Image" class="img-fluid">
                </div>
                <div class="col-md-5 ml-auto product-title-wrap">
                    <h3 class="text-black mb-4 font-weight-bold">Техосмотр</h3>
                    <p class="mb-4"></p><p>Подошёл срок прохождения техосмотра?</p>
                    <p><span data-height="17">В Алматы </span><span data-height="17">можно быстро, без очередей пройти техосмотр в </span><span data-height="17">DSS s</span><span data-height="17">ervice</span><span data-height="17">. </span><span data-height="17">Без дополнительных </span><span data-height="17">сборов</span><span data-height="17">!</span></p>
                    <p><span data-height="17">Платите фиксированную стоимость и получаете качественный техосмотр.</span></p>
                    <p><span data-height="17">DSS </span><span data-height="17">service </span><span data-height="17">это:</span></p>
                    <p><span data-height="17">•</span><span data-height="17">7 станций техосмотра по городу;</span></p>
                    <p><span data-height="17">•</span><span data-height="17">Обслуживание без выходных;</span></p>
                    <p><span data-height="17">•</span><span data-height="17">Профессионально и недорого.</span></p>
                    <p>Где можно пройти техосмотр:</p>
                    <p> </p>
                    <p>В будние дни : 09:00–20:00</p>
                    <p>В выходные: 09:00–18:00</p>
                    <div class="s3">1. ул. Жандосова, 102</div>
                    <div class="s3">2. ул. Жандосова, 70 а</div>
                    <div class="s3">3. мкр. Акбулак, ул. Хан шытар, 273 а/1</div>
                    <div class="s3">4. Ташкентский тракт 18 км., 18</div>
                    <div class="s3">5. пос. Гульдала, Кульджинский тракт, 39/1</div>
                    <div class="s3">6. пос. Гульдала, Кульджинский тракт, 6</div>
                    <div class="s3">7. ул. Емцова, 26 а</div><p></p>
                    <p>
                    </p><p class="price">Cтоимость: {{$product->price}} тг.</p>
                    <a href="/order/order_{{$product->id}}" class="btn btn-black btn-outline-black rounded-0 d-block mb-2 mb-lg-0 d-lg-inline-block">Заказать</a>
                    <p></p>
                </div>
            </div>
        </div>
        <div class="text-center">
            <h2 class="section-title mb-3">Смотрите также</h2>
        </div>
        <div class="row bg-white margin0 padding15 paddingtop30" id="prodrow">
            <div class="col-lg-4 col-md-6 mb-5 forproduct-item" style="display: block;">
                <div class="product-item">
                    <a href="/show/55"><figure>
                            <img src="/files/1622091209коммеск_недвижимость_продукт.png" alt="Image" class="img-fluid">
                        </figure></a>
                    <div class="px-4">
                        <h3><a href="/show/55">Создание Объединения собственников имущества</a></h3>
                        <div class="mb-3">
                            <!--<span class="meta-icons mr-3"><a href="#" class="mr-2"><span class="icon-star text-warning"></span></a> 5.0</span>
                            <span class="meta-icons wishlist"><a href="#" class="mr-2"><span class="icon-heart"></span></a> 29</span>-->
                        </div>
                        <p class="mb-4 fordesk">Помощь в создании ОСИ в г. Алматы.</p>
                        <div>
                            <a href="https://kommesk-home.kz/" class="btn btn-black mr-1 rounded-0 readmore readmoresm" target="_blank">ПЕРЕЙТИ НА САЙТ</a>
                            <a href="/show/55" class="btn btn-black btn-outline-black ml-1 rounded-0 readmore readmoresm">Подробнее</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-6 mb-5 forproduct-item" style="display: block;">
                <div class="product-item">
                    <a href="/show/41"><figure>
                            <img src="/files/1613976861911_эваккуация.png" alt="Image" class="img-fluid">
                        </figure></a>
                    <div class="px-4">
                        <h3><a href="/show/41">Эвакуатор по г. Алматы</a></h3>
                        <div class="mb-3">
                            <!--<span class="meta-icons mr-3"><a href="#" class="mr-2"><span class="icon-star text-warning"></span></a> 5.0</span>
                            <span class="meta-icons wishlist"><a href="#" class="mr-2"><span class="icon-heart"></span></a> 29</span>-->
                        </div>
                        <p class="mb-4 fordesk">Срочная транспортировка вашей машины из точки А в точку Б.</p>
                        <div>
                            <a href="https://aida911.kz/evacuator?utm_source=cent.kz&amp;utm_medium=organic&amp;utm_campaign=evakuator" class="btn btn-black mr-1 rounded-0 readmore readmoresm" target="_blank">ПЕРЕЙТИ НА САЙТ</a>
                            <a href="/show/41" class="btn btn-black btn-outline-black ml-1 rounded-0 readmore readmoresm">Подробнее</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-6 mb-5 forproduct-item" style="display: block;">
                <div class="product-item">
                    <a href="/show/28"><figure>
                            <img src="/files/1613034620911.png" alt="Image" class="img-fluid">
                        </figure></a>
                    <div class="px-4">
                        <h3><a href="/show/28">Юридическая поддержка при ДТП в г. Алматы</a></h3>
                        <div class="mb-3">
                            <!--<span class="meta-icons mr-3"><a href="#" class="mr-2"><span class="icon-star text-warning"></span></a> 5.0</span>
                            <span class="meta-icons wishlist"><a href="#" class="mr-2"><span class="icon-heart"></span></a> 29</span>-->
                        </div>
                        <p class="mb-4 fordesk">АвтоАдвокат поможет уладить все вопросы при ДТП</p>
                        <div>
                            <a href="https://testaida.cic.kz/911?utm_source=cent.kz&amp;utm_medium=banner&amp;utm_campaign=dtphelp  " class="btn btn-black mr-1 rounded-0 readmore readmoresm" target="_blank">ЗАКАЗАТЬ</a>
                            <a href="/show/28" class="btn btn-black btn-outline-black ml-1 rounded-0 readmore readmoresm">Подробнее</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
