 AOS.init({
 	duration: 800,
 	easing: 'slide',
 	once: true
 });

jQuery(document).ready(function($) {
plus();
	"use strict";


	var siteMenuClone = function() {

		$('.js-clone-nav').each(function() {
			var $this = $(this);
			$this.clone().attr('class', 'site-nav-wrap').appendTo('.site-mobile-menu-body');
		});


		setTimeout(function() {

			var counter = 0;
      $('.site-mobile-menu .has-children').each(function(){
        var $this = $(this);

        $this.prepend('<span class="arrow-collapse collapsed">');

        $this.find('.arrow-collapse').attr({
          'data-toggle' : 'collapse',
          'data-target' : '#collapseItem' + counter,
        });

        $this.find('> ul').attr({
          'class' : 'collapse',
          'id' : 'collapseItem' + counter,
        });

        counter++;

      });

    }, 1000);

		$('body').on('click', '.arrow-collapse', function(e) {
      var $this = $(this);
      if ( $this.closest('li').find('.collapse').hasClass('show') ) {
        $this.removeClass('active');
      } else {
        $this.addClass('active');
      }
      e.preventDefault();

    });

		$(window).resize(function() {
			var $this = $(this),
				w = $this.width();

			if ( w > 768 ) {
				if ( $('body').hasClass('offcanvas-menu') ) {
					$('body').removeClass('offcanvas-menu');
				}
			}
		})

		$('body').on('click', '.js-menu-toggle', function(e) {
			var $this = $(this);
			e.preventDefault();

			if ( $('body').hasClass('offcanvas-menu') ) {
				$('body').removeClass('offcanvas-menu');
				$this.removeClass('active');
			} else {
				$('body').addClass('offcanvas-menu');
				$this.addClass('active');
			}
		})

		// click outisde offcanvas
		$(document).mouseup(function(e) {
	    var container = $(".site-mobile-menu");
	    if (!container.is(e.target) && container.has(e.target).length === 0) {
	      if ( $('body').hasClass('offcanvas-menu') ) {
					$('body').removeClass('offcanvas-menu');
				}
	    }
		});
	};
	siteMenuClone();


	var sitePlusMinus = function() {
		$('.js-btn-minus').on('click', function(e){
			e.preventDefault();
			if ( $(this).closest('.input-group').find('.form-control').val() != 0  ) {
				$(this).closest('.input-group').find('.form-control').val(parseInt($(this).closest('.input-group').find('.form-control').val()) - 1);
			} else {
				$(this).closest('.input-group').find('.form-control').val(parseInt(0));
			}
		});
		$('.js-btn-plus').on('click', function(e){
			e.preventDefault();
			$(this).closest('.input-group').find('.form-control').val(parseInt($(this).closest('.input-group').find('.form-control').val()) + 1);
		});
	};
	// sitePlusMinus();


	var siteSliderRange = function() {
    $( "#slider-range" ).slider({
      range: true,
      min: 0,
      max: 500,
      values: [ 75, 300 ],
      slide: function( event, ui ) {
        $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
      }
    });
    $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
      " - $" + $( "#slider-range" ).slider( "values", 1 ) );
	};
	// siteSliderRange();



	var siteCarousel = function () {
		if ( $('.nonloop-block-13').length > 0 ) {
			$('.nonloop-block-13').owlCarousel({
		    center: false,
		    items: 1,
		    loop: true,
				stagePadding: 0,
		    margin: 0,
		    autoplay: true,
		    nav: true,
				navText: ['<span class="icon-arrow_back">', '<span class="icon-arrow_forward">'],
		    responsive:{
	        600:{
	        	margin: 0,
	        	nav: true,
	          items: 2
	        },
	        1000:{
	        	margin: 0,
	        	stagePadding: 0,
	        	nav: true,
	          items: 3
	        },
	        1200:{
	        	margin: 0,
	        	stagePadding: 0,
	        	nav: true,
	          items: 4
	        }
		    }
			});
		}

		$('.slide-one-item').owlCarousel({
	    center: false,
	    items: 1,
	    loop: true,
			stagePadding: 0,
	    margin: 0,
	    autoplay: true,
	    pauseOnHover: false,
	    nav: true,
	    navText: ['<span class="icon-keyboard_arrow_left">', '<span class="icon-keyboard_arrow_right">']
	  });
	};
	siteCarousel();

	var siteStellar = function() {
		$(window).stellar({
	    responsive: false,
	    parallaxBackgrounds: true,
	    parallaxElements: true,
	    horizontalScrolling: false,
	    hideDistantElements: false,
	    scrollProperty: 'scroll'
	  });
	};
	siteStellar();

	var siteCountDown = function() {

		$('#date-countdown').countdown('2020/10/10', function(event) {
		  var $this = $(this).html(event.strftime(''
		    + '<span class="countdown-block"><span class="label">%w</span> weeks </span>'
		    + '<span class="countdown-block"><span class="label">%d</span> days </span>'
		    + '<span class="countdown-block"><span class="label">%H</span> hr </span>'
		    + '<span class="countdown-block"><span class="label">%M</span> min </span>'
		    + '<span class="countdown-block"><span class="label">%S</span> sec</span>'));
		});

	};
	siteCountDown();

	var siteDatePicker = function() {

		if ( $('.datepicker').length > 0 ) {
			$('.datepicker').datepicker();
		}

	};
	siteDatePicker();

	var siteSticky = function() {
		$(".js-sticky-header").sticky({topSpacing:0});
	};
	siteSticky();

	// navigation
  var OnePageNavigation = function() {
    var navToggler = $('.site-menu-toggle');
   	$("body").on("click", ".main-menu li a[href^='#'], .smoothscroll[href^='#'], .site-mobile-menu .site-nav-wrap li a", function(e) {
      e.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        'scrollTop': $(hash).offset().top
      }, 600, 'easeInOutCirc', function(){
        window.location.hash = hash;
      });

    });
  };
  OnePageNavigation();

  var siteScroll = function() {



  	$(window).scroll(function() {

  		var st = $(this).scrollTop();

  		if (st > 100) {
  			$('.js-sticky-header').addClass('shrink');
  		} else {
  			$('.js-sticky-header').removeClass('shrink');
  		}

  	})

  };
  siteScroll();
  $(".forproduct-item").fadeIn('fast');

$( ".formes" ).keypress(function() {
 if ($(this).val()!=''){
console.log(22);
 	$(this).removeClass('formeserr');}
});
$( ".formes" ).change(function() {
 if ($(this).val()!=''){$(this).removeClass('formeserr');}
});
});



function changecat(id, get){


$(".catlink").removeClass('catlinkcurent');
	$('#cat'+id).addClass('catlinkcurent');

	$('#catid').val(id);

	$('#prodrow,#nextlink').html('');
       start=0
	showmore(start, get);

}

 function showmore(start, get){
if(window.inProgres){return}

window.inProgres=true;
$('#nextlink').html('');
$.post("/main/showmore"+get, { start:start, catid:$("#catid").val()}).done(function( data ) {


window.inProgres=false;
  $("#prodaj").html(data);


  }).fail( function(xhr, textStatus, errorThrown) {

window.inProgres=false;
Servererror();

      });


}


 function SendMessage(){
if(window.inProgresm){return;}
$("#mesres").html('').removeClass('forErr');
$('.formeserr').removeClass('formeserr')
$(".formes").each(function(){

	if($(this).val()==''){$(this).addClass('formeserr');}
});
if ($('.formeserr').length){
$("#mesres").addClass('forErr')
	$("#mesres").html('Заполните все необходимые поля'); return;}


		 strtosen=$(".formes").serializeArray();


		   $.ajax({

            url: '/main/sendmes',

            method: 'POST',

            data:$.param(strtosen),

            beforeSend: function() {
            window.inProgresm = true;

        }

            }).done(function(data){

            window.inProgresm = false;

         $("#mesres").html(data);

$(".formes").each(function(){

	$(this).val('');
});

            }).fail(function() {
;
	 window.inProgresm = false;
  });

 }



 function SendOrder(){
if(window.inProgresm){return;}
$("#omesres").html('').removeClass('forErr');
$('.formeserr').removeClass('formeserr')
$(".foror").each(function(){

	if($(this).val()==''){$(this).addClass('formeserr');}
});
if ($('.formeserr').length){
$("#omesres").addClass('forErr')
	$("#omesres").html('Заполните все необходимые поля'); return;}


		 strtosen=$(".foror").serializeArray();
const queryString = window.location.search;


	        strtosen.push({ name: "queryString", value: queryString });

		   $.ajax({

            url: '/main/sendtelegram',
            dataType: "json",
            method: 'POST',

            data:$.param(strtosen),

            beforeSend: function() {
            window.inProgresm = true;

        }

            }).done(function(data){

            window.inProgresm = false;

        if(data.result=='ok'){

sucsesstelega(data.id);
		}
         else {
		 $("#omesres").addClass('forErr')
	$("#omesres").html('Произошла ошибка при отправлении заказа'); return;
		 }

            }).fail(function() {
	 $("#omesres").addClass('forErr')
	$("#omesres").html('Произошла ошибка при отправлении заказа'); return;
	 window.inProgresm = false;
  });

 }

function initorderform(id, pid){
$('#curentpartnerid').val(id);
	$("#curentprodid").val(pid);
	 $('.formor').show();
$('.thankyor').hide();

}
function initorderforme(id, price){
$('#curentprice').val(price);
	$("#curentprodide").val(id);
	 $('.formore').show();
$('.thankyore').hide();

}
 function sucsesstelega(id){
$(".foror").each(function(){

	$(this).val('');
});
 $('#ordernum').html(id);
 $('.formor').hide();
$('.thankyor').show();
 }

	function plus(){
	totalq=parseInt($("#totalq").html())+1;
		totalp=totalq*parseInt($("#price").val());
	totalp_=number_format(totalp, 0 , '', ' ');
		$("#totalp").html(totalp_);
			$("#totalq").html(totalq);

		if(!$(".icon-minus").hasClass('activeicon')){
		$(".icon-minus").addClass('activeicon');

		}

			$("#gotocart").removeClass('disabledb');
	}

	function minus(){
	totalq=parseInt($("#totalq").html())-1;
		if(totalq<0 || totalq==0){totalq=0;
				if(!$("#gotocart").hasClass('disabledb')){}
					$("#gotocart").addClass('disabledb');
					$(".icon-minus").removeClass('activeicon');
					}
		totalp=totalq*parseInt($("#price").val());
		totalp_=number_format(totalp, 0 , '', ' ');
		$("#totalp").html(totalp_);
			$("#totalq").html(totalq);


	}


function number_format( number, decimals, dec_point, thousands_sep ) {	// Format a number with grouped thousands
	//
	// +   original by: Jonas Raoni Soares Silva (http://www.jsfromhell.com)
	// +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
	// +	 bugfix by: Michael White (http://crestidg.com)

	var i, j, kw, kd, km;

	// input sanitation & defaults
	if( isNaN(decimals = Math.abs(decimals)) ){
		decimals = 2;
	}
	if( dec_point == undefined ){
		dec_point = ",";
	}
	if( thousands_sep == undefined ){
		thousands_sep = ".";
	}

	i = parseInt(number = (+number || 0).toFixed(decimals)) + "";

	if( (j = i.length) > 3 ){
		j = j % 3;
	} else{
		j = 0;
	}

	km = (j ? i.substr(0, j) + thousands_sep : "");
	kw = i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands_sep);
	//kd = (decimals ? dec_point + Math.abs(number - i).toFixed(decimals).slice(2) : "");
	kd = (decimals ? dec_point + Math.abs(number - i).toFixed(decimals).replace(/-/, 0).slice(2) : "");


	return km + kw + kd;
}
