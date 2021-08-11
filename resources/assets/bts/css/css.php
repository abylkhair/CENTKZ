<?php
 header( "Content-type:text/css; charset=UTF-8");
	session_start();
	ini_set('display_errors', 0);
ini_set('log_errors', 0);
foreach (	$_SESSION['css'] as $k=>$v){
//	echo $v;
if (file_exists($v)){

echo str_replace("{pref}",$_SESSION['pref'],file_get_contents($v));}

}

?>
