
  $(function(){
 $("#seloffices").change(function(){

idc=$(this).val();

$("#"+idc).click();
console.log("#"+idc);

 });

    $(".citiest__main").click(function(){
      $(".cityger").show(); 
    });
    $(".cityger>ul>li>a, .cityger_contact>ul>li>a").click(function(event){
     // event.preventDefault();
    
        let city = $(this).text();
        $(".citiest").text(city);
        $(".usure").text($(this).attr('tel'));
         $(".phone__namemain").text($(this).attr('value'));
         $(".citiest").text($(this).attr('value'));
         $(".cityger").hide();
        $(".headofficesm").hide();
         gr=$(this).attr('georegion');
        $(".sel"+gr).show();

      
         
      
         $.ajax({
          url: '/contacts/change',
          type: 'POST',
          data: {
            city: $(this).attr('georegion'),
            cityl:$(this).html()
          },
          success: function(data) {
            $('.contacts__nav').find('ul.nav__list > li').first().find('a').addClass('active').click();
            $.each($('.menuwraper'), function(k, v) {
              if($(this).is(':visible'))
                $(this).find('ul>li').first().find('a').click();
            });
          },
         });
    });



     $(".cityger_contact>ul>li>a").click(function(event){
      event.preventDefault();
      $(".menuwraper").hide();
        let city = $(this).text();
        $(".citiest").text(city);
          id=$(this).attr("id");
        $(".dis"+id).show();
      });
  });
  
   $("a.headoffices").click(function(){
          $('.headoffices').removeClass('active');
          $('.suboffices').removeClass('active');
          $('.headoffices.'+this.id).addClass('active');
          $(this).addClass('active');
   });

  $("a.suboffices").click(function(event){
  //   event.preventDefault();
    console.log("ccc");
          $('.suboffices').removeClass('active');
          $('.headoffices').removeClass('active');
          $('.suboffices.'+this.id).addClass('active');
          $(this).toggleClass("active");
   });

 $(".headoffm").click(function(){

cl=$(this).attr('clickdata');
$("#"+cl).click();

       
 });
  $(function(){

    var url = window.location.pathname, 
        urlRegExp = new RegExp(url.replace(/\/$/,'') + "$"); 
        $('#nav__list li a').each(function(){
            if(urlRegExp.test(this.href.replace(/\/$/,'')) && url !== '/'){
                $(this).addClass('active');
            } else {
              $(this).removeClass('active');
            }
        });

    $.each($('.cityger_contact').find('ul > li >a'), function(k, v) {
      if($(this).data('current') == 1)
        $(this).click();
    });
    $.each($('.menuwraper'), function(k, v) { 
      if($(this).is(':visible'))
        $(this).find('ul>li').first().find('a').click();
    });

});

/*$(function() {
  $('.teamSelect > li > a').click(function(){
    var _this = $(this);
    $('.person').each(function(k, v) {
      if($(this).attr('id') == _this.text())
        $(this).show();
      else
        $(this).hide();
    });
  });
});*/



    // $("#contact-form").submit(function() {
    //   if(document.form.name.value == '' || document.form.phone.value == ''){
    //     valid = false;
    //     return valid;
    //   }
    //     var str = $(this).serialize();
    //     var btn = $(this).find("input[type=submit]");
    //     var oldBtnTitle = btn.prop("value");
    //     btn.prop("disabled", true).prop("value", "Отправляю...");
        
    //     $.ajax({
    //         type: "POST",
    //         url: "/contacts/sendmessage",
    //         data: str,
    //     }).done(function(msg){
    //       alert("Спасибо за заявку! Скоро мы с вами свяжемся");
      
    //     return false;
    // });


// $('#submit').click(function () {
//   var email = $('#email').val ();
//   var name = $('#name').val ();
//   var phone = $('#phone').val ();
//   var message = $('#message').val ();
//   $.ajax({
//     url:   '/contacts/sendmessage',
//     type:  'POST',
//     cache:    false,
//     data:     {'name':name,'phone':phone, 'email':email, 'message':message},
//     dataType: 'html',
//     beforeSend: function () {
//       $('#submit').attr("disabled", "disabled");
//     },
//     success: function(data) {
//       if (data == true) {
//         $('#name').val ("");
//         $('#phone').val ("");
//         $('#email').val ("");
//         $('#message').val ("");
//         $('#submit').text ("Сообщение отправлено");
//         $('phone').css ("border-color", "#60fc8c");
//         $('#email').css ("border-color", "#60fc8c");
//         $('#name').css ("border-color", "#60fc8c");
//         $('#message').css ("border-color", "#60fc8c");
//       } else {
//         if (data == false)        
//           alert ("Что-то пошло не так! Сообщение не отправлено");
//         else {          
//           switch (data) {
//           case "Имя не указано":
//           $('#name').css ("border-color", "#f7b4b4");
//           break;
//           case "Телефон не указан":
//           $('#phone').css ("border-color", "#f7b4b4");
//           break;
//           case "Сообщение не указано":
//           $('#message').css ("border-color", "#f7b4b4");
//           break;
//           case "Неправильный e-mail":
//           $('#email').css ("border-color", "#f7b4b4");
//           break;
//           default:
//           $('#email').css ("border-color", "#f7b4b4");
//           $('#message').css ("border-color", "#f7b4b4");
//           $('#phone').css ("border-color", "#f7b4b4");
//           $('#name').css ("border-color", "#f7b4b4");
//           }
//         }
//       }
//       $('#submit').removeAttr("disabled");       
//     }
//   });
// });