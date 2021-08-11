function sendpartnerpwd(id){

	path=window.location.pathname;



//if(window.inProgressc){return;}
//window.inProgressch=true;
$.post("/partners/sendpartnerpwd", { id:id, path:path}).done(function( data ) {


//window.inProgressch=false;
  $("#ajax_responses").html(data);
 
// $("#chat_id").val(chat_id);
  
  }).fail( function(xhr, textStatus, errorThrown) {
    
//window.inProgressch=false;
Servererror();

      });




	
	
}


function clearfileform(fname){

$('#'+fname).val('');
//console.log('ss');
}






function changepwd (){


if ($("#oldpwd").val()=='') {  $("#pwdres").html('Поле старый пароль не заполнено');
exit;
}

if ($("#newpwd").val()=='') {   $("#pwdres").html('Поле новый пароль не заполнено');
exit;
}
if ($("#newpwd").val()!=$("#conpwd").val())  { $("#pwdres").html('Пароли не сопадают');
exit;
}
path=window.location.pathname;



//if(window.inProgressc){return;}
//window.inProgressch=true;
$.post("/settings/changepwd", { oldpwd:$("#oldpwd").val(), newpwd:$("#newpwd").val(), path:path}).done(function( data ) {


//window.inProgressch=false;
  $("#pwdres").html(data);
 //$("#sendcomrez").html(data);
 
// $("#chat_id").val(chat_id);
  
  }).fail( function(xhr, textStatus, errorThrown) {
    
//window.inProgressch=false;
Servererror();

      });






}

function showorders(){



path=window.location.pathname;



//if(window.inProgressc){return;}
//window.inProgressch=true;
$.post("/orders/list", { start:$("#start").val(), end:$("#end").val(), path:path}).done(function( data ) {


//window.inProgressch=false;
  $("#list").html(data);
 //$("#sendcomrez").html(data);
 
// $("#chat_id").val(chat_id);
  
  }).fail( function(xhr, textStatus, errorThrown) {
    
//window.inProgressch=false;
Servererror();

      });






}

function removefile (name, rname, id,qid, orderid){
if(!confirm('Вы действительно хотите удалить файл?')){return;}
path=window.location.pathname;



//if(window.inProgressc){return;}
//window.inProgressch=true;
$.post("/admin/removefile", { name:name, rname:rname, id:id, qid:qid, path:path, orderid:orderid}).done(function( data ) {


//window.inProgressch=false;
  $("#fileajd").html(data);
 //$("#sendcomrez").html(data);
 
// $("#chat_id").val(chat_id);
  
  }).fail( function(xhr, textStatus, errorThrown) {
    
//window.inProgressch=false;
Servererror();

      });






}

function removetmpfile(name, id, orderid){

path=window.location.pathname;



//if(window.inProgressc){return;}
//window.inProgressch=true;
$.post("/admin/removetmpfile", { name:name, id:id, path:path,  orderid:orderid}).done(function( data ) {


//window.inProgressch=false;
  $("#fileajd").html(data);
 //$("#sendcomrez").html(data);
 
// $("#chat_id").val(chat_id);
  
  }).fail( function(xhr, textStatus, errorThrown) {
    
//window.inProgressch=false;
Servererror();

      });






}




function addfile(id, rname, curentfileoder){

//alert(name+"()"+rname);
if(!$("#"+id).length){

row="<span id='"+id+"' class='filerow'> <a href='javascript:void(0);' onclick=\"removetmpfile('"+rname+"','"+id+"', "+curentfileoder+" )\"><span class='glyphicon glyphicon-remove' aria-hidden='true'></span></a> <img src='/tmpfiles/"+rname+"' width=100><span class='fname' style='display:none;'>"+rname+"</span> </span>";
if (curentfileoder>0){
$("#filelist").append(row);}
else {
row="<span id='"+id+"' class='filerow mainf'> <a href='javascript:void(0);' onclick=\"removetmpfile('"+rname+"', '"+id+"', "+curentfileoder+" )\"><span class='glyphicon glyphicon-remove' aria-hidden='true'></span></a> <img src='/tmpfiles/"+rname+"' width=100><span class='fname'  style='display:none;'>"+rname+"</span> <br></span>";

$("#filelist").prepend(row);
$('#uplinkm').hide();
}
}

}


function addfileed(name, rname,id, qid, curentfileoder){
$('#uplinkm').hide();
//alert(name+"()"+rname);
if(!$("#"+name).length){

row="<span id='"+name+"' class='filerow'> <a href='javascript:void(0);' onclick=\"removefile('"+name+"','"+rname+"', "+id+" , "+qid+","+curentfileoder+")\"><span class='glyphicon glyphicon-remove' aria-hidden='true'></span></a><img src='/files/"+rname+"' width=100> <span class='fname' style='display:none;'>"+rname+"</span> </span>";
if (curentfileoder>0){
$("#filelist").append(row);

}
else {
row="<span id='"+name+"' class='filerow mainf'> <a href='javascript:void(0);' onclick=\"removefile('"+name+"','"+rname+"', "+id+" , "+qid+","+curentfileoder+")\"><span class='glyphicon glyphicon-remove' aria-hidden='true'></span></a> <img src='/files/"+rname+"' width=100><span class='fname' style='display:none;'>"+rname+"</span><br> </span>";
  $("#filelist").prepend(row);

}
}

}

function inituploaded(fname, qid) {
  if ($('#'+fname).val()==''){ return}
   var file_data = $('#'+fname).prop('files')[0];

    var form_data = new FormData();

    form_data.append('file', file_data);

   
path=window.location.pathname;
$("#fountainG").css("visibility", "visible"); $("#uplinkm").hide();
form_data.append('path', path);
form_data.append('qid', qid);
form_data.append('curentfileoder', $("#curentfileoder").val());

      $.ajax({
                url: '/admin/uploaded',
                dataType: 'text',
                cache: false,
                contentType: false,
                processData: false,
                data: form_data,
                type: 'post',
                success: function(response){
                    $("#fileaj").html(response);
                   $("#fountainG").css("visibility", "hidden"); $("#uplinkm").show();
                }
     });

}


function initupload(fname) {
  if ($('#'+fname).val()==''){ return}
   var file_data = $('#'+fname).prop('files')[0];

    var form_data = new FormData();

    form_data.append('file', file_data);
form_data.append('curentfileoder', $("#curentfileoder").val());
   
path=window.location.pathname;
$("#fountainG").css("visibility", "visible"); $("#uplink").hide();
form_data.append('path', path);

      $.ajax({
                url: '/admin/upload',
                dataType: 'text',
                cache: false,
                contentType: false,
                processData: false,
                data: form_data,
                type: 'post',
                success: function(response){
                    $("#fileaj").html(response);
                   $("#fountainG").css("visibility", "hidden"); $("#uplink").show();
                }
     });

}


function init_changeeml(e) {
    if (e.keyCode == 13) {
       changeeml();
        return false;
    }
}

 function changeeml(id){path=window.location.pathname;
if($("#eml").val()=='') return;


if(window.inProgressch){return;}
window.inProgressch=true;
$.post("/settings/changeeml", {eml:$("#eml").val(), path:path}).done(function( data ) {


window.inProgressch=false;

 $("#emlres").html(data);
 
// $("#chat_id").val(chat_id);
  
  }).fail( function(xhr, textStatus, errorThrown) {
    
//window.inProgressch=false;
Servererror();

      });



//
 }



function clearprodform(){

 $("#link").val(''); $("#name").val(''); $("#desk").val(''); $("#cartname").val(''); $("#cartdesk").val('');
	 $("#botandesk").val('');
 $("#filelist").html('');
	 $("#group").html('');
 $('#uplinkm').show();
	$("#realprice").val(0),
 tinyMCE.get('tex').setContent('');

}



function edprod(id){
path=window.location.pathname;

if($("#dat").val()=='' || $("#link").val()=='' || $("#name").val()=='' || $("#desk").val()=='' ){
 $("#sendcomrez").html('Не все поля заполнены!');
return;
}

// $("#sendcomrez").html(files);
$('#tex').val(tinyMCE.get('tex').getContent());
$("#fountainG").css("visibility", "visible"); $("#savebut").hide();
$("#sendcomrez").html('');
$.post("/admin/edprod", {id:id,dat:$("#dat").val(),  link:$("#link").val(), group:$("#group").val(), realprice:$("#realprice").val(), catid:$("#catid").val(), name:$("#name").val(), desk:$("#desk").val(), cartname:$("#cartname").val(), cartdesk:$("#cartdesk").val(), botandesk:$("#botandesk").val(), botanbutton:$("#botanbutton").val(), tex:$("#tex").val(), path:path}).done(function( data ) {


$("#sendcomrez").html(data);
  $("#fountainG").css("visibility", "hidden"); $("#savebut").show();
  
  }).fail( function(xhr, textStatus, errorThrown) {
    
 $("#fountainG").css("visibility", "hidden"); $("#savebut").show();
Servererror();

      });

}



function adprod(){
path=window.location.pathname;

if($("#dat").val()=='' || $("#name").val()=='' || $("#desk").val()=='' || $("#link").val()=='' ){
 $("#sendcomrez").html('Не все поля заполнены!');
return;
}
files='';
$(".filerow").each(function(){

name=$(this).attr('id');
rname=$(this).children('.fname').html();
orderid=1;
if($(this).hasClass('mainf')){orderid=0;}
files=files+name+"*"+rname+"*"+orderid+"#";

});
if (files==''){ $("#sendcomrez").html('Не загружено изображение!');
return;}
// $("#sendcomrez").html(files);

$("#fountainG").css("visibility", "visible"); $("#savebut").hide();
$("#sendcomrez").html('');

$('#tex').val(tinyMCE.get('tex').getContent());
$.post("/admin/adprod", {dat:$("#dat").val(), catid:$("#catid").val(),  name:$("#name").val(), realprice:$("#realprice").val(), desk:$("#desk").val(), cartname:$("#cartname").val(), cartdesk:$("#cartdesk").val(), botandesk:$("#botandesk").val(), tex:$("#tex").val(),  link:$("#link").val(),files:files, path:path}).done(function( data ) {


$("#sendcomrez").html(data);
  $("#fountainG").css("visibility", "hidden"); $("#savebut").show();
  
  }).fail( function(xhr, textStatus, errorThrown) {
    
 $("#fountainG").css("visibility", "hidden"); $("#savebut").show();
Servererror();

      });

}









function logout(){


$.post("/main/logout", {action:'logout'}).done(function( data ) {



 $("#ajax_responses").html(data);
 
// $("#chat_id").val(chat_id);
	
	}).fail( function(xhr, textStatus, errorThrown) {
		

Servererror();

			});

}


function update(id){
path=window.location.pathname;

$.post("/as/update", {id:id, path:path}).done(function( data ) {



 $("#ajax_responses").html(data);
 
// $("#chat_id").val(chat_id);
  
  }).fail( function(xhr, textStatus, errorThrown) {
    

Servererror();

      });

}





function updatelist(){
id='';
$(".today").each(function(){

id=id+"#"+$(this).attr('id');

});
$.post("/admin/updatelist", {id:id}).done(function( data ) {


$("#userslist").prepend(data);
 //$("#ajax_responses").html(data);
 
setTimeout(function(){ updatelist(); }, 5000);
	
	}).fail( function(xhr, textStatus, errorThrown) {
		
setTimeout(function(){ updatelist(); }, 5000);
Servererror();

			});

}

function initlist(startFrom){	
/* Переменная-флаг для отслеживания того, происходит ли в данный момент ajax-запрос. В самом начале даем ей значение false, т.е. запрос не в процессе выполнения */
window.inProgress = false;
/* С какой статьи надо делать выборку из базы при ajax-запросе */
 window.startFrom = startFrom;

    /* Используйте вариант $('#more').click(function() для того, чтобы дать пользователю возможность управлять процессом, кликая по кнопке "Дальше" под блоком статей (см. файл index.php) */
    $("#userslistouter").scroll(function() {


        /* Если высота окна + высота прокрутки больше или равны высоте всего документа и ajax-запрос в настоящий момент не выполняется, то запускаем ajax-запрос */
        if($("#userslistouter").scrollTop() + $("#userslistouter").height() >= $("#userslist").height() && !window.inProgress) {
        	$("#fountainG").css('visibility','visible');
        	
        		 strtosen=$(".forsearch").serializeArray(); 
	 strtosen.push({name: "startFrom", value:  window.startFrom});
        		 $(".forsearch").each(function(){
id=$(this).attr('id');

 strtosen.push({name: id, value:  $(this).val()});

});

ids='';
$(".listrow").each(function(){

ids=ids+"#"+$(this).attr('id');

});
 strtosen.push({name: 'ids', value:  ids});
  $.ajax({
            /* адрес файла-обработчика запроса */
            url: '/'+$("#addr").val()+'/list',
            /* метод отправки данных */
            method: 'POST',
            /* данные, которые мы передаем в файл-обработчик */
            data:$.param(strtosen),
            /* что нужно сделать до отправки запрса */
            beforeSend: function() {
            /* меняем значение флага на true, т.е. запрос сейчас в процессе выполнения */
            window.inProgress = true;}
            /* что нужно сделать по факту выполнения запроса */
            }).done(function(data){

    	$("#fountainG").css('visibility','hidden');
if (data!=''){ $("#userslist").append(data);

  /* По факту окончания запроса снова меняем значение флага на false */
            window.inProgress = false;
            // Увеличиваем на 10 порядковый номер статьи, с которой надо начинать выборку из базы
            window.startFrom += startFrom;

}
         window.inProgress = false;
            }).fail(function() {
showerr("Ошибка доступа к серверу");
	$("#fountainG").css('visibility','hidden');
	 window.inProgress = false;
  });
    
        }
    });


}



function setorder(id){

if(intval($("#order"+id).val())!=$("#order"+id).val()){alert('Введите число');
													  exit;
													  }
	
	
$("#fountainG").css("visibility", "visible");
path=window.location.pathname;
$.post("/admin/setorder", {id:id,   orderid:$("#order"+id).val(), path:path}).done(function( data ) {


  $("#fountainG").css("visibility", "hidden");
  
  }).fail( function(xhr, textStatus, errorThrown) {
    
 $("#fountainG").css("visibility", "hidden"); 
Servererror();

      });	
	
console.log($("#order"+id).val());
}
function intval( mixed_var, base ) {	// Get the integer value of a variable
	// 
	// +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)

	var tmp;

	if( typeof( mixed_var ) == 'string' ){
		tmp = parseInt(mixed_var);
		if(isNaN(tmp)){
			return 0;
		} else{
			return tmp.toString(base || 10);
		}
	} else if( typeof( mixed_var ) == 'number' ){
		return Math.floor(mixed_var);
	} else{
		return 0;
	}
}


function  strip_tags(str, allowed_tags) { 
              var key = '', allowed = false; 
              var matches = []; 
              var allowed_array = []; 
              var allowed_tag = ''; 
              var i = 0; 
              var k = ''; 
              var html = ''; 
     
              var replacer = function(search, replace, str) { 
                  return str.split(search).join(replace); 
              }; 
     
              // Build allowes tags associative array 
              if (allowed_tags) { 
                  allowed_array = allowed_tags.match(/([a-zA-Z]+)/gi); 
              } 
     
              str += ''; 
     
              // Match tags 
              matches = str.match(/(<\/?[\S][^>]*>)/gi); 
     
              // Go through all HTML tags 
              for (key in matches) { 
                  if (isNaN(key)) { 
                      // IE7 Hack 
                      continue; 
                  } 
     
                  // Save HTML tag 
                  html = matches[key].toString(); 
     
                  // Is tag not in allowed list? Remove from str! 
                  allowed = false; 
     
                  // Go through all allowed tags 
                  for (k in allowed_array) { 
                      // Init 
                      allowed_tag = allowed_array[k]; 
                      i = -1; 
     
                      if (i != 0) { i = html.toLowerCase().indexOf('<'+allowed_tag+'>');} 
                      if (i != 0) { i = html.toLowerCase().indexOf('<'+allowed_tag+' ');} 
                      if (i != 0) { i = html.toLowerCase().indexOf('</'+allowed_tag)   ;} 
     
                      // Determine 
                      if (i == 0) { 
                          allowed = true; 
                          break; 
                      } 
                  } 
     
                  if (!allowed) { 
                      str = replacer(html, "", str); // Custom replace. No regexing 
                  } 
              } 
     
              return str; 
          }

function Servererror(){}