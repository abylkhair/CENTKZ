






function del(item, page){
if (confirm("Вы подтверждаете удаление?")){
	$("#pages").append('<img src="/images/ajax-loader.gif" id="loadingp">')
$.post("/artsa/del/", {id:item, page}).done(function( data ) {



 $("#ajax_responses").html(data);
 $("#loadingp").remove();
// $("#chat_id").val(chat_id);
	
	}).fail( function(xhr, textStatus, errorThrown) {
		
$("#loadingp").remove();
Servererror();

			});
}
else {return false;}
}

function clearartform(){

$('#name_ru').val(''); $("#keywords_ru").val(''); $("#description_ru").val(''); $("#head_ru").val('');  $("#tex_ru").val(''), $("#img_ru").val('');
 $("#img_ruPrev").html('');
tinyMCE.get('tex_ru').setContent('');


$('#name_en').val(''); $("#keywords_en").val(''); $("#description_en").val(''); $("#head_en").val('');  $("#tex_en").val(''), $("#img_en").val('');
 $("#img_enPrev").html('');
  $("#pubdat").html('');
tinyMCE.get('tex_en').setContent('');

$('#name_kz').val(''); $("#keywords_kz").val(''); $("#description_kz").val(''); $("#head_kz").val('');  $("#tex_kz").val(''), $("#img_kz").val('');
 $("#img_kzPrev").html('');
tinyMCE.get('tex_kz').setContent('');


}



function chorder(id){
	
if ($('#name_ru').val()==''){showerr("Не заполнено название");

return false;
}
	


	//$("#ajax_responses").html('');


	//$(".saveb").append('<img src="/images/ajax-loader.gif" class="loadingp">')


$.post("/artsa/chorder/",{id:id, orderid:$("#order"+id).val()}).done(function( data ) {

//$(".loadingp").remove();

// $("#ajax_responses").html(data);
 
// $("#chat_id").val(chat_id);
	
	}).fail( function(xhr, textStatus, errorThrown) {
		
//$(".loadingp").remove();
Servererror();

			});
}



function art_add(){
	
if ($('#name_ru').val()==''){showerr("Не заполнено название");

return false;
}
	$('#tex_ru').val(tinyMCE.get('tex_ru').getContent());
		$('#tex_en').val(tinyMCE.get('tex_en').getContent());
		$('#tex_kz').val(tinyMCE.get('tex_kz').getContent());


	$("#ajax_responses").html('');


	$(".saveb").append('<img src="/images/ajax-loader.gif" class="loadingp">')


$.post("/artsa/add/",{name_ru:$('#name_ru').val(), keywords_ru:$("#keywords_ru").val(), description_ru:$("#description_ru").val(), head_ru:$("#head_ru").val(),  tex_ru:$("#tex_ru").val(), img_ru:$("#img_ru").val(), name_en:$('#name_en').val(), keywords_en:$("#keywords_en").val(), description_en:$("#description_en").val(), head_en:$("#head_en").val(),  tex_en:$("#tex_en").val(), img_en:$("#img_en").val(), name_kz:$('#name_kz').val(), keywords_kz:$("#keywords_kz").val(), description_kz:$("#description_kz").val(), head_kz:$("#head_kz").val(),  tex_kz:$("#tex_kz").val(), img_kz:$("#img_kz").val(), raz:$('#raz').val(), pubdat:$("#pubdat").val()}).done(function( data ) {

$(".loadingp").remove();

 $("#ajax_responses").html(data);
 
// $("#chat_id").val(chat_id);
	
	}).fail( function(xhr, textStatus, errorThrown) {
		
$(".loadingp").remove();
Servererror();

			});
}




function art_edd(id){
	
if ($('#name_ru').val()==''){showerr("Не заполнено название");

return false;
}
	$('#tex_ru').val(tinyMCE.get('tex_ru').getContent());
		$('#tex_en').val(tinyMCE.get('tex_en').getContent());
		$('#tex_kz').val(tinyMCE.get('tex_kz').getContent());


	$("#ajax_responses").html('');

	$(".saveb").append('<img src="/images/ajax-loader.gif" class="loadingp">');



$.post("/artsa/edd/",{name_ru:$('#name_ru').val(), keywords_ru:$("#keywords_ru").val(), description_ru:$("#description_ru").val(), head_ru:$("#head_ru").val(),  tex_ru:$("#tex_ru").val(), img_ru:$("#img_ru").val(), name_en:$('#name_en').val(), keywords_en:$("#keywords_en").val(), description_en:$("#description_en").val(), head_en:$("#head_en").val(),  tex_en:$("#tex_en").val(), img_en:$("#img_en").val(),name_kz:$('#name_kz').val(), keywords_kz:$("#keywords_kz").val(), description_kz:$("#description_kz").val(), head_kz:$("#head_kz").val(),  tex_kz:$("#tex_kz").val(), img_kz:$("#img_kz").val(),  pubdat:$("#pubdat").val(), id:id}).done(function( data ) {


$(".loadingp").remove();
 $("#ajax_responses").html(data);
 
// $("#chat_id").val(chat_id);
	
	}).fail( function(xhr, textStatus, errorThrown) {
		
$(".loadingp").remove();
Servererror();

			});
}


function responsive_filemanager_callback(field_id){
//	console.log(field_id);
	var url=$('#'+field_id).val();
path=url.replace(window.location.protocol.toString()+"//"+window.location.hostname.toString(),'');
$('#'+field_id).val(path);

	thumb=path.replace('/simages', '/bts/js/filemanager/thumbs');
	$('#'+field_id+'Prev').html('<img src="'+thumb+'">');
	
	
	//your code
}

function delfrompage(id){

$("#item_"+id).remove();

}

function clearim(id){
$("#"+id).val('');
$("#"+id+"Prev").html('');

}