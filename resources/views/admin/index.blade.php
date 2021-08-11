<!doctype html>
<html lang="en">
<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
    <title>CENTKZ Админка</title>
</head>
<body>
<ul class="nav nav-tabs">
    <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="#">Форма данных</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="№">Список категорий</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="#">Логин/Пароль</a>
    </li>
    <li class="nav-item">
        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Даты продуктов</a>
    </li>
</ul>
<div class="form-floating mb-3">
    <input type="date" class="form-control" id="floatingInput" placeholder="2012-12-21">
    <label for="floatingInput">Дата</label>
</div>
<div class="form-floating mb-3">
    <input type="text" class="form-control" id="floatingInput" placeholder="Ссылка">
    <label for="floatingInput">Ссылка</label>
</div>
<div class="form-floating mb-3">
    <input type="number" class="form-control" id="floatingInput" placeholder="Стоймость(только число)">
    <label for="floatingInput">Price</label>
</div>
<div class="form-floating mb-3">
    <input type="text" class="form-control" id="floatingInput" placeholder="Категория">
    <label for="floatingInput">Категория</label>
</div>
<div class="mb-3">
    <label for="exampleFormControlTextarea1" class="form-label">Описание краткое</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
<div class="dropdown">
    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
        Кнопка для ботана
    </button>
    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
        <li><a class="dropdown-item" href="#">Заказать</a></li>
        <li><a class="dropdown-item" href="#">Купить</a></li>
        <li><a class="dropdown-item" href="#">Подробнее</a></li>
    </ul>
</div>
<div class="form-floating mb-3 mt-3">
    <input type="text" class="form-control" id="floatingInput" placeholder="2012-12-21">
    <label for="floatingInput"></label>
</div>
<form>
    <div class="form-group">
        <label for="exampleFormControlFile1">Файл продукта</label>
        <input type="file" class="form-control-file" id="exampleFormControlFile1">
    </div>
</form>







<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4" crossorigin="anonymous"></script>







<!--
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.min.js" integrity="sha384-Atwg2Pkwv9vp0ygtn1JAojH0nYbwNJLPhwyoVbhoPwBhjQPR5VtM2+xf0Uwh9KtT" crossorigin="anonymous"></script>
-->
</body>
</html>
