<?php
session_start();
//Корневая директория сайта
define('DIR_ROOT',		$_SERVER['DOCUMENT_ROOT']);
//Директория с изображениями (относительно корневой)
define('DIR_IMAGES',	'/edu/sitepics');
//Директория с файлами (относительно корневой)
define('DIR_FILES',		'/edu/files');


//Высота и ширина картинки до которой будет сжато исходное изображение и создана ссылка на полную версию
define('WIDTH_TO_LINK', 640);
define('HEIGHT_TO_LINK', 3000);

//Атрибуты которые будут присвоены ссылке (для скриптов типа lightbox)
//define('CLASS_LINK', 'lightview');
//define('REL_LINK', 'lightbox');

define('CLASS_LINK', '');
define('REL_LINK', '');

//date_default_timezone_set('Asia/Yekaterinburg');

?>
