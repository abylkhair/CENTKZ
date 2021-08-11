



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
$.post("/mysettings/changepwd", { oldpwd:$("#oldpwd").val(), newpwd:$("#newpwd").val(), path:path}).done(function( data ) {


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
$.post("/myorders/list", { start:$("#start").val(), end:$("#end").val(), path:path}).done(function( data ) {


//window.inProgressch=false;
  $("#list").html(data);
 //$("#sendcomrez").html(data);
 
// $("#chat_id").val(chat_id);
  
  }).fail( function(xhr, textStatus, errorThrown) {
    
//window.inProgressch=false;
Servererror();

      });






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