function sendform(){

$("#sendr").html('');
check=1;
 $(".inps").each(function(){if($(this).val()==''){
$("#sendr").html('<span class="err">Не все поля заполнены!</span>');
//$(this).focus();
check=0


 
 }});
 
 if (check==0){return;}
strtosend=$(".inps").serialize(); 
$("#sendr").append('<img src="/images/ajax-loader.gif" id="loadingp">');

$.post("/main/sendform/", strtosend).done(function( data ) {

$("#loadingp").remove();
$("#sendr").html(data);
 $(".inps").val('');

	
	}).fail( function(xhr, textStatus, errorThrown) {
		$("#loadingp").remove();
$("#sendr").html('<span class="err">Ошибка доступа к серверу</span>');


			});


}


function calccurent(){return;
	 var scroll = $(window).scrollTop();
//$("#langs").html(scroll);
hl=$("#home").offset().top-100;	br=$("#bmsremedy").offset().top-100;
	cb=$("#contourbi").offset().top-100;	it=$("#itsm").offset().top-100;
		ds=$("#developnentandsupport").offset().top-100;
if ((scroll>=hl && scroll<br)|| scroll==0){$(".tl").removeClass('actl'); $(".tl").addClass('topl');

$("#lhome").removeClass('topl');
$("#lhome").addClass('actl');
}


	

	
	if (scroll>=br && scroll<cb){$(".tl").removeClass('actl');$(".tl").addClass('topl');

$("#lbmsremedy").removeClass('topl');
$("#lbmsremedy").addClass('actl');
}



	
		if (scroll>=cb && scroll<it){$(".tl").removeClass('actl');
		$(".tl").addClass('topl');


$("#lcontourbi").removeClass('topl');
$("#lcontourbi").addClass('actl');
}
	





		if (scroll>=it && scroll<ds){$(".tl").removeClass('actl'); $(".tl").addClass('topl');

$("#litsm").removeClass('topl');
$("#litsm").addClass('actl');
}

		if (scroll>=ds ){$(".tl").removeClass('actl'); $(".tl").addClass('topl');

$("#ldevelopnentandsupport").removeClass('topl');
$("#ldevelopnentandsupport").addClass('actl');
}

}