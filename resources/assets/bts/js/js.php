<?php
 header( "Content-type: application/javascript'; charset=UTF-8");
	session_start();
	ini_set('display_errors', 0);
ini_set('log_errors', 0);
foreach (	$_SESSION['jss'] as $k=>$v){
if (file_exists($v)){

echo str_replace("{pref}",$_SESSION['pref'],file_get_contents($v));}

}

?>
<?php
if ( $_SESSION['jsf']){

	
	foreach (	$_SESSION['jsf'] as $k=>$v){
	
	echo str_replace("{pref}",$_SESSION['pref'],$v);
											}
	
			}	?>

<?php
if ( $_SESSION['jssdr']){
?>
$(document).ready(function() { 
<?php
	
	foreach (	$_SESSION['jssdr'] as $k=>$v){
	
	echo str_replace("{pref}",$_SESSION['pref'],$v);
											}
	
		?>
							});

<?php   				}	?>