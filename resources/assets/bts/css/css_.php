<?php
ini_set('error_reporting', E_ALL);
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
header("Content-type: text/css; charset: UTF-8");
	  header("Expires: Mon, 26 Jul 1997 05:00:00 GMT");
  header("Last-Modified: " . gmdate("D, d M Y H:i:s")." GMT");
  header("Cache-Control: no-cache, must-revalidate");
  header("Cache-Control: post-check=0,pre-check=0", false);
  header("Cache-Control: max-age=0", false);
  header("Pragma: no-cache");
	session_start();

foreach (	$_SESSION['css'] as $k=>$v){
//	echo $v;
if (file_exists($v)){

echo str_replace("{pref}",$_SESSION['pref'],file_get_contents($v));}

}

?>
