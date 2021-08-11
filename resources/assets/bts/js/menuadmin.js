function menu_edd(item){
	
if ($('#name_ru').val()==''){showerr("Не заполнено название");

return false;
}
//if (get_val('link')==''){alert("Не заполнено поле ссылка");
//return false;
//}

$.post("/menu/edd/"+item,{name_ru:$('#name_ru').val(), name_en:$('#name_en').val(),  name_kz:$('#name_kz').val(),  page:$('#curent_page').val()}).done(function( data ) {



 $("#ajax_responses").html(data);
$(".loadingp").remove(); 
// $("#chat_id").val(chat_id);
	
	}).fail( function(xhr, textStatus, errorThrown) {
		
$(".loadingp").remove();
Servererror();

			});
}

function menu_add(item){

	$("#ajax_responses").html('');


if ($('#name_ru').val()==''){showerr("Не заполнено название");
return false;
}
//if (get_val('link')==''){alert("Не заполнено поле ссылка");
//return false;
//}
	$(".saveb").append('<img src="/images/ajax-loader.gif" class="loadingp">')
$.post("/menu/add/",{name_ru:$('#name_ru').val(), name_en:$('#name_en').val(),  name_kz:$('#name_kz').val(),  page:$('#curent_page').val()}).done(function( data ) {

$(".loadingp").remove();

 $("#ajax_responses").html(data);
 
// $("#chat_id").val(chat_id);
	
	}).fail( function(xhr, textStatus, errorThrown) {
		$(".loadingp").remove();

Servererror();

			});
}

function delmenu(item){
if (confirm("Вы подтверждаете удаление?")){

$.post("/menu/del/", {page:item}).done(function( data ) {


$.get("/menu/a_j" ).done(function( data ) {



$("#sortable").html(data)

});
 
// $("#chat_id").val(chat_id);
	
	}).fail( function(xhr, textStatus, errorThrown) {
		

Servererror();

			});
}
else {return false;}
}

function initmenu(){
	
alert(1);
$.get("/menu/a_j" ).done(function( data ) {



$("#sortable").html(data)

});

	
}