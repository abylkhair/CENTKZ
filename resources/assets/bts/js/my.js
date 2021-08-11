function inituserwin(id, chat_id, msisdn){
	$("#ajax_responses").html('');
	$("#sendmess").val('');

$.post("/{pref}/main/renewmap/", {id:id}).done(function( data ) {



 $("#ajax_responses").html(data);
 
 $("#chat_id").val(chat_id);
	
	}).fail( function(xhr, textStatus, errorThrown) {
		

Servererror();

			});


}


function sendMessage(){
	$("#ajax_responses").html('');
		$(".modal-title").append('<img src="/{pref}/images/ajax-loader.gif" id="loadingp">')
$.post("/{pref}/main/sendMessage/", {chat_id:$("#chat_id").val(), text:$("#sendmess").val()}).done(function( data ) {
	$("#loadingp").remove();

 $("#ajax_responses").html(data);
 

	
	}).fail( function(xhr, textStatus, errorThrown) {
		
		$("#loadingp").remove();
Servererror();
			});


}


function topage(page){
	
	
if(typeof page === 'object'){
url=page.attr('href');}
else {url=page}
	
	$("#ajax_responses").html('');
	$("#sendmess").val('');

		$("#pages").append('<img src="/images/ajax-loader.gif" id="loadingp">')
$.post(url,{id:1}).done(function( data ) {



 $("#ajax_responses").html(data);
 
$("#loadingp").remove();
	
	}).fail( function(xhr, textStatus, errorThrown) {
		
$("#loadingp").remove();

Servererror();
			});
			



history.pushState('', '', url);
 //History.replaceState(null, document.title, url);
 
      
 
     
 
return false;

}


function showerr(text){
$("#mestitle").html('Ошибка!');
$("#mestext").html(text);
$('#myModalmes').modal('show')

}


function showrez(text){
$("#mestitle").html('Результат запроса!');
$("#mestext").html(text);
$('#myModalmes').modal('show')

}

function Servererror(){
 showerr('Сервер не доступен попробуйте позднее');

}

