function clearfileform(fname){

$('#'+fname).val('');
//console.log('ss');
}


function search(){ 

if($("#dat").val()==''){alert("Критерии поиска не эффективны"); return}


 if($('#cvoute:checked').length > 0){cvoute='y';
} else{cvoute='n';}


 if($('#cnew:checked').length > 0){cnew='y';
} else{cnew='n';}

path=window.location.pathname;



//if(window.inProgresst){return;}
//window.inProgresst=true;
$.post("/as/search", { cvoute:cvoute, cnew:cnew, dat:$("#dat").val(), path:path}).done(function( data ) {


//window.inProgresst=false;
  $("#slistinner").html(data);
 //$("#sendcomrez").html(data);
 
// $("#chat_id").val(chat_id);
  
  }).fail( function(xhr, textStatus, errorThrown) {
    
//window.inProgresst=false;
Servererror();

      });





  $('#slist').show(); $('#mainlist').hide();}

function setuv(id){


  if($('#'+id+':checked').length > 0){uv='y';
} else{uv='n';}

path=window.location.pathname;



//if(window.inProgresst){return;}
//window.inProgresst=true;
$.post("/settings/setuv", { uv:uv, col:id, path:path}).done(function( data ) {


//window.inProgresst=false;
  $("#uvaj").html(data);
 //$("#sendcomrez").html(data);
 
// $("#chat_id").val(chat_id);
  
  }).fail( function(xhr, textStatus, errorThrown) {
    
//window.inProgresst=false;
Servererror();

      });

}

function setstage2(id){


  if($('#fors:checked').length > 0){stage='vouting';
} else{stage='closed';}

path=window.location.pathname;



//if(window.inProgresst){return;}
//window.inProgresst=true;
$.post("/as/setstage", { stage:stage, id:id, path:path}).done(function( data ) {


//window.inProgresst=false;
  $("#stageaj").html(data);
 //$("#sendcomrez").html(data);
 
// $("#chat_id").val(chat_id);
  
  }).fail( function(xhr, textStatus, errorThrown) {
    
//window.inProgresst=false;
Servererror();

      });

}
function setstage(id, stage){


  if($('#forb'+stage).hasClass('btn-success')){return;}
  else {



path=window.location.pathname;



if(window.inProgresst){return;}
window.inProgresst=true;
$.post("/as/setstage", { stage:stage, id:id, path:path}).done(function( data ) {


window.inProgresst=false;
  $("#stageaj").html(data);
 //$("#sendcomrez").html(data);
 
// $("#chat_id").val(chat_id);
  
  }).fail( function(xhr, textStatus, errorThrown) {
    
window.inProgresst=false;
Servererror();

      });


   

}
}



function removefile (name, rname, id,qid){

path=window.location.pathname;



//if(window.inProgressc){return;}
//window.inProgressch=true;
$.post("/as/removefile", { name:name, rname:rname, id:id, qid:qid, path:path}).done(function( data ) {


//window.inProgressch=false;
  $("#fileajd").html(data);
 //$("#sendcomrez").html(data);
 
// $("#chat_id").val(chat_id);
  
  }).fail( function(xhr, textStatus, errorThrown) {
    
//window.inProgressch=false;
Servererror();

      });






}

function removetmpfile(name){

path=window.location.pathname;



//if(window.inProgressc){return;}
//window.inProgressch=true;
$.post("/as/removetmpfile", { name:name, path:path}).done(function( data ) {


//window.inProgressch=false;
  $("#fileajd").html(data);
 //$("#sendcomrez").html(data);
 
// $("#chat_id").val(chat_id);
  
  }).fail( function(xhr, textStatus, errorThrown) {
    
//window.inProgressch=false;
Servererror();

      });






}




function addfile(name, rname){

//alert(name+"()"+rname);
if(!$("#"+name).length){

row="<span id='"+name+"' class='filerow'> <a href='javascript:void(0);' onclick=\"removetmpfile('"+name+"')\"><span class='glyphicon glyphicon-remove' aria-hidden='true'></span></a> <span class='fname'>"+rname+"</span> </span>";
$("#filelist").append(row);
}

}


function addfileed(name, rname,id, qid){

//alert(name+"()"+rname);
if(!$("#"+name).length){

row="<span id='"+name+"' class='filerow'> <a href='javascript:void(0);' onclick=\"removefile('"+name+"','"+rname+"', "+id+" , "+qid+")\"><span class='glyphicon glyphicon-remove' aria-hidden='true'></span></a> <span class='fname'>"+rname+"</span> </span>";
$("#filelist").append(row);
}

}

function inituploaded(fname, qid) {
  if ($('#'+fname).val()==''){ return}
   var file_data = $('#'+fname).prop('files')[0];

    var form_data = new FormData();

    form_data.append('file', file_data);

   
path=window.location.pathname;
$("#fountainG").css("visibility", "visible"); $("#uplink").hide();
form_data.append('path', path);
form_data.append('qid', qid);

      $.ajax({
                url: '/as/uploaded',
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


function initupload(fname) {
  if ($('#'+fname).val()==''){ return}
   var file_data = $('#'+fname).prop('files')[0];

    var form_data = new FormData();

    form_data.append('file', file_data);

   
path=window.location.pathname;
$("#fountainG").css("visibility", "visible"); $("#uplink").hide();
form_data.append('path', path);

      $.ajax({
                url: '/as/upload',
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

function init_sendchat(e, id) {
    if (e.keyCode == 13) {
       sendchat(id);
        return false;
    }
}

function clearasform(){

 $("#asnum").val(''); $("#name").val(''); $("#desk").val('');
 $("#filelist").html('');

}



function edas(id){
path=window.location.pathname;

if($("#dat").val()=='' || $("#asnum").val()=='' || $("#name").val()=='' || $("#desk").val()=='' ){
 $("#sendcomrez").html('Не все поля заполнены!');
return;
}

// $("#sendcomrez").html(files);

$("#fountainG").css("visibility", "visible"); $("#savebut").hide();
$("#sendcomrez").html('');
$.post("/as/edas", {id:id,dat:$("#dat").val(),  asnum:$("#asnum").val(), name:$("#name").val(), desk:$("#desk").val(), path:path}).done(function( data ) {


$("#sendcomrez").html(data);
  $("#fountainG").css("visibility", "hidden"); $("#savebut").show();
  
  }).fail( function(xhr, textStatus, errorThrown) {
    
 $("#fountainG").css("visibility", "hidden"); $("#savebut").show();
Servererror();

      });

}



function adas(){
path=window.location.pathname;

if($("#dat").val()=='' || $("#asnum").val()=='' || $("#name").val()=='' || $("#desk").val()=='' ){
 $("#sendcomrez").html('Не все поля заполнены!');
return;
}
files='';
$(".filerow").each(function(){

name=$(this).attr('id');
rname=$(this).children('.fname').html();
files=files+name+"*"+rname+"#";

});
// $("#sendcomrez").html(files);

$("#fountainG").css("visibility", "visible"); $("#savebut").hide();
$("#sendcomrez").html('');
$.post("/as/adas", {dat:$("#dat").val(),  asnum:$("#asnum").val(), name:$("#name").val(), desk:$("#desk").val(),files:files, path:path}).done(function( data ) {


$("#sendcomrez").html(data);
  $("#fountainG").css("visibility", "hidden"); $("#savebut").show();
  
  }).fail( function(xhr, textStatus, errorThrown) {
    
 $("#fountainG").css("visibility", "hidden"); $("#savebut").show();
Servererror();

      });

}


function clearanswer(){  $("#parent").val(0);
$('#aswerdata').html('');

}
function initanswer(id, fio){

  $("#parent").val(id);
  text="<a href='javascript:void(0);' onclick='clearanswer()'><span class='glyphicon glyphicon-remove' aria-hidden='true'></span></a> ответ на сообщение от "+fio;

$('#aswerdata').html(text);
}


 function sendchat(id){path=window.location.pathname;
if($("#chatmes").val()=='') return;


if(window.inProgressch){return;}
window.inProgressch=true;
$.post("/as/sendchat", {id:id, tex:$("#chatmes").val(), parent:$("#parent").val(), path:path}).done(function( data ) {

$("#chatmes").val('');
window.inProgressch=false;
$("#chataj").html(data);
 $("#sendcomrez").html(data);
 
// $("#chat_id").val(chat_id);
  
  }).fail( function(xhr, textStatus, errorThrown) {
    
//window.inProgressch=false;
Servererror();

      });



//
 }

function setv(v){

$('.btnv').removeClass('btn-success').addClass('btn-primary');
  
  
  $('#forb'+v).removeClass('btn-primary').addClass('btn-success');
  $("#resh").val(v);
}

function sendcom(id){
path=window.location.pathname;
if($("#resh").val()==''){

  $("#errortext").html('Вы не указали вашего решения!');

 $("#sendcomrez").html('<span class="errortext">Вы не указали вашего решения!</span>');
 $('#mymodal').modal('show');
 return;
}
if($("#forcomment").val()=='' && $("#resh").val()=='protiv'){

    $("#errortext").html('Коментарий обязателен!');
 $("#sendcomrez").html('<span class="errortext">Коментарий обязателен!</a>');
  $('#mymodal').modal('show');
 return;
}


if(window.inProgressc){return;}
window.inProgressc=true;
$.post("/as/sendcom", {id:id, resh:$("#resh").val(), comment:$("#forcomment").val()}).done(function( data ) {


window.inProgressc=false;
 $("#sendcomrez").html(data);
 
// $("#chat_id").val(chat_id);
  
  }).fail( function(xhr, textStatus, errorThrown) {
    
window.inProgressc=false;
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


function showlog(id){
path=window.location.pathname;

$.post("/as/showlog", {id:id, path:path}).done(function( data ) {



 $("#logdiv").html(data);
 
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
$.post("/as/updatelist", {id:id}).done(function( data ) {


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
            url: '/as/list',
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


function unbold(id){

$str=strip_tags($(id).html(), "<br>");
$(id).html($str);

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