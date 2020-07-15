
function responseMenu(){
	$('ul.dropdown-menu li.item').appendTo('ul.menu');
	var items = $('ul.menu li.item');
	var max_width = $('ul.menu').width() /*+ $('ul.menu li.dd_menu').outerWidth()*/;
	var width = 0;
	var hide_from = 0;

	//items.css({'width':'auto'});

	items.each(function(index){
		if (width + $(this).outerWidth() > max_width)
		{
			return false;
		}
		else
		{
			hide_from = index;
			width += $(this).outerWidth();
		}
	});
	if (hide_from < items.length - 1) {
		items.eq(hide_from).nextAll('li.item').appendTo('ul.dropdown-menu');
		//items.css({'width':(max_width / (hide_from + 1)) + 'px'});
		$('ul.menu li.dd_menu').show();
	}
	else
	{
		$('ul.menu li.dd_menu').hide();
	}
}

$(document).ready(function() {
	$('.top_menu').on('click', '.dropdown-toggle', function () {
		if ($('.dropdown-menu').css("display") == "block") {
			$('.dropdown-menu').slideUp(500);
			$(this).removeClass('active');
		 }else{
			$('.dropdown-menu').slideDown(500);
			$(this).addClass('active');
		 }
		 e.preventDefault();
	});
	
	$(window).on('load resize', function(){
		responseMenu();
	}).trigger('resize');

	$('input,textarea').focus(function(){
	    $(this).data('placeholder',$(this).attr('placeholder'))
	    $(this).attr('placeholder','');
	});
	$('input,textarea').blur(function(){
	    $(this).attr('placeholder',$(this).data('placeholder'));
	});

	$(window).on('load scroll resize', function(){
		//var height = $(window).height() - 100;
		if($(this).scrollTop() > 40) {
		    $('#header').addClass('scroll');
		} else {
		    $('#header').removeClass('scroll');
		} 
	});

	$(".menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top - 100;
        $('body,html').animate({scrollTop: top}, 1000);
    });
	
	$('.plus').click(function(){
		if ($(this).parent().children('.description').css("display") == "block") {
		    $(this).parent().children('.description').slideUp(500);
		    $(this).removeClass('active');
		}else{
		    $('.description').slideUp(500);
		    $('.plus').removeClass('active');
		    $(this).parent().children('.description').slideDown(500);
		    $(this).addClass('active');
		}
	});
	
	var elem = $('#main_screen'),
	pos = elem.offset(),
	elem_left = pos.left,
	elem_top = pos.top,
	elem_width = elem.width(),
	elem_height = elem.height(),
	x_center,
	y_center;


	$('#main_screen').mousemove(function(e){

		x_center = ( elem_width / 2 ) - ( e.pageX - elem_left );
		y_center = ( elem_height / 2 ) - ( e.pageY - elem_top );

		$('.layer').each(function(){

		var speed = $(this).attr('data-speed'),
			xPos = Math.round(-1*x_center/40*speed),
			yPos = Math.round(-1*y_center/40*speed);

		// if (yPos < 0)
		//   yPos = -2*speed;
	
		$(this).css('transform', 'translate3d('+xPos+'px, '+yPos+'px, 0px)');

		});
	});

	
	
	
	// animation
	if ( window.innerWidth>0 ) {
		$('.main_section').toggleClass("hidden");
		$('#index #header').addClass('hidden');
		$('#main_slide').addClass('animated');
		//$('#header').addClass('animated');
	};
	setTimeout (function(){
	 	$('#index #header').addClass('animated');
		
	}, 0); 
	$(window).on('load scroll', function(){
	    $('.main_section').each(function(){
		if ( $(this).offset().top < ($(document).scrollTop() + window.innerHeight*0.9 ) ) {
		    $(this).addClass('animated');
		}
	    });
	});
	
	// tab switching
	$('.tab_buttons span').on('click', function(){ 
		var tabs = $(this).parents('.tabs_container'),
		id = $('.tab_buttons span', tabs).index(this);
	    
		$(this).addClass('active').siblings().removeClass('active');
		$('.tab:eq(' + id + ')', tabs).addClass('active').siblings().removeClass('active');
	    
	});

	$(window).on('load resize', function(){
		if ( window.innerWidth>1300 && $('.advantages').hasClass('slick-initialized') ) {
		  $('.advantages').slick('unslick');
		} else if ( window.innerWidth<=1300 && !$('.advantages').hasClass('slick-initialized') ) {
		  $('.advantages').slick({
		    prevArrow: '<span class="slick-prev"></span>',
		    nextArrow: '<span class="slick-next"></span>',
		    slidesToShow: 1,
			adaptiveHeight: true,
		  });
		}
	});


	$('.production.item-4 .slider_primary').slick({
	    slidesToShow: 1,
	    slidesToScroll: 1,
	    arrows: false,
	    fade: true,
	    //variableWidth: true,
	    adaptiveHeight: true,
	    asNavFor: '.production.item-4 .slider_secondary',
	    responsive: [
		  {
		    breakpoint: 601,
		    settings: {
		      arrows: true,
		      prevArrow: '<span class="slick-prev">&nbsp;</span>',
		      nextArrow: '<span class="slick-next">&nbsp;</span>',
		    }
		  },
		]
	});
	$('.production.item-4 .slider_secondary').slick({
	    slidesToShow: 3,
	    slidesToScroll: 1,
	    arrows: true,
	    prevArrow: '<span class="slick-prev">&nbsp;</span>',
	    nextArrow: '<span class="slick-next">&nbsp;</span>',
	    asNavFor: '.production.item-4 .slider_primary',
	    dots: false,
	    //centerMode: true,
	    //vertical: true,
	    focusOnSelect: true,
	    responsive: [
		  {
		    breakpoint: 1301,
		    settings: {
		      slidesToShow: 2,
		    }
		  },
		  {
		    breakpoint: 801,
		    settings: {
		      slidesToShow: 1,
		    }
		  },
		]
	});

	$('.production.item-2 .slider_primary').slick({
	    slidesToShow: 1,
	    slidesToScroll: 1,
	    arrows: false,
	    fade: true,
	    //variableWidth: true,
	    adaptiveHeight: true,
	    asNavFor: '.production.item-2 .slider_secondary',
	    responsive: [
		  {
		    breakpoint: 451,
		    settings: {
		      arrows: true,
		      prevArrow: '<span class="slick-prev">&nbsp;</span>',
		      nextArrow: '<span class="slick-next">&nbsp;</span>',
		    }
		  },
		]
	});
	$('.production.item-2 .slider_secondary').slick({
	    slidesToShow: 1,
	    slidesToScroll: 1,
	    arrows: true,
	    prevArrow: '<span class="slick-prev">&nbsp;</span>',
	    nextArrow: '<span class="slick-next">&nbsp;</span>',
	    asNavFor: '.production.item-2 .slider_primary',
	    dots: false,
	    //centerMode: true,
	    //vertical: true,
	    focusOnSelect: true,
	});

	$('#projects .projects').slick({
	    slidesToShow: 3,
	    slidesToScroll: 1,
	    infinite: true,
	    dots: false,
	    focusOnSelect: true,
	    arrows: true,
		prevArrow: '<span class="slick-prev">&nbsp;</span>',
		nextArrow: '<span class="slick-next">&nbsp;</span>',
		responsive: [
			{
				breakpoint: 1301,
				settings: {
				  slidesToShow: 2,
				}
			},
			{
				breakpoint: 1001,
				settings: {
				  slidesToShow: 1,
				}
			},
		]
	});

	$('.certificates').slick({
	    slidesToShow: 3,
	    slidesToScroll: 1,
	    arrows: true,
	    dots: false,
	    //fade: true,
	    prevArrow: '<span class="slick-prev">&nbsp;</span>',
		nextArrow: '<span class="slick-next">&nbsp;</span>',
		responsive: [
			{
				breakpoint: 1001,
				settings: {
				  slidesToShow: 2,
				}
			},
			{
				breakpoint: 801,
				settings: {
				  slidesToShow: 3,
				}
			},
			{
				breakpoint: 601,
				settings: {
				  slidesToShow: 2,
				}
			},
			{
				breakpoint: 451,
				settings: {
				  slidesToShow: 1,
				}
			},
		]
	});


	$(window).on('load resize', function(){
		if ( window.innerWidth>801 && $('.application').hasClass('slick-initialized') ) {
		  $('.application').slick('unslick');
		} else if ( window.innerWidth<=801 && !$('.application').hasClass('slick-initialized') ) {
		  $('.application').slick({
		    prevArrow: '<span class="slick-prev"></span>',
		    nextArrow: '<span class="slick-next"></span>',
		    slidesToShow: 2,
			adaptiveHeight: true,
			slidesToScroll: 1,
			responsive: [
				{
					breakpoint: 601,
					settings: {
					  slidesToShow: 1,
					}
				},
			]
		  });
		}
	});







	
	
	
	
	$('.directions.slider').slick({
	    slidesToShow: 4,
	    slidesToScroll: 1,
	    infinite: true,
	    dots: false,
	    //focusOnSelect: true,
	    arrows: true,
		prevArrow: '<span class="slick-prev">&nbsp;</span>',
		nextArrow: '<span class="slick-next">&nbsp;</span>',
		responsive: [
			{
				breakpoint: 1251,
				settings: {
				  slidesToShow: 3,
				}
			},
			{
				breakpoint: 951,
				settings: {
				  slidesToShow: 2,
				}
			},
			{
				breakpoint: 501,
				settings: {
				  slidesToShow: 1,
				}
			},
		]
	});

	

	$(window).on('load resize', function(){
		if ( window.innerWidth>1300 && $('#services_block .production').hasClass('slick-initialized') ) {
		  $('#services_block .production').slick('unslick');
		} else if ( window.innerWidth<=1300 && !$('#services_block .production').hasClass('slick-initialized') ) {
		  $('#services_block .production').slick({
		    prevArrow: '<span class="slick-prev"></span>',
		    nextArrow: '<span class="slick-next"></span>',
		    slidesToShow: 3,
			adaptiveHeight: true,
			responsive: [
				{
					breakpoint: 1001,
					settings: {
						slidesToShow: 2,
					}
				},
				{
					breakpoint: 500,
					settings: {
					  slidesToShow: 1,
					  vertical: false,
					}
				},
			]
		  });
		}
	});

	$('#advantages .advantages').slick({
	    slidesToShow: 3,
	    slidesToScroll: 1,
	    infinite: true,
	    dots: false,
	    focusOnSelect: true,
	    arrows: true,
		prevArrow: '<span class="slick-prev">&nbsp;</span>',
		nextArrow: '<span class="slick-next">&nbsp;</span>',
		responsive: [
			{
				breakpoint: 1101,
				settings: {
				  slidesToShow: 2,
				}
			},
			{
				breakpoint: 601,
				settings: {
				  slidesToShow: 1,
				  adaptiveHeight: true,
				}
			},
		]
	});

	

	$('.projects.slider').slick({
	    slidesToShow: 3,
	    slidesToScroll: 1,
	    infinite: true,
	    dots: false,
	    focusOnSelect: true,
	    arrows: true,
		prevArrow: '<span class="slick-prev">&nbsp;</span>',
		nextArrow: '<span class="slick-next">&nbsp;</span>',
		responsive: [
			{
				breakpoint: 1101,
				settings: {
				  slidesToShow: 2,
				}
			},
			{
				breakpoint: 601,
				settings: {
				  slidesToShow: 1,
				}
			},
		]
	});

	$(window).on('load resize', function(){
		if ( window.innerWidth>1300 && $('#index .news_block').hasClass('slick-initialized') ) {
		  $('#index .news_block').slick('unslick');
		} else if ( window.innerWidth<=1300 && !$('#index .news_block').hasClass('slick-initialized') ) {
		  $('#index .news_block').slick({
		    prevArrow: '<span class="slick-prev"></span>',
		    nextArrow: '<span class="slick-next"></span>',
		    slidesToShow: 3,
			adaptiveHeight: true,
			responsive: [
				{
					breakpoint: 1001,
					settings: {
						slidesToShow: 2,
					}
				},
				{
					breakpoint: 600,
					settings: {
					  slidesToShow: 1,
					  vertical: false,
					}
				},
			]
		  });
		}
	});

	$(window).on('load resize', function(){
		if ( window.innerWidth>1300 && $('.catalog.similar').hasClass('slick-initialized') ) {
		  $('.catalog.similar').slick('unslick');
		} else if ( window.innerWidth<=1300 && !$('.catalog.similar').hasClass('slick-initialized') ) {
		  $('.catalog.similar').slick({
		    prevArrow: '<span class="slick-prev"></span>',
		    nextArrow: '<span class="slick-next"></span>',
		    slidesToShow: 3,
			adaptiveHeight: true,
			responsive: [
				{
					breakpoint: 901,
					settings: {
						slidesToShow: 2,
					}
				},
				{
					breakpoint: 600,
					settings: {
					  slidesToShow: 1,
					  vertical: false,
					}
				},
			]
		  });
		}
	});

	
	

	

	
	$('.galery').slick({
	    slidesToShow: 3,
	    slidesToScroll: 1,
	    arrows: true,
	    dots: false,
	    //fade: true,
	    prevArrow: '<span class="slick-prev">&nbsp;</span>',
		nextArrow: '<span class="slick-next">&nbsp;</span>',
		responsive: [
			{
				breakpoint: 1101,
				settings: {
				  slidesToShow: 2,
				}
			},
			{
				breakpoint: 601,
				settings: {
				  slidesToShow: 1,
				}
			},
		]
	});
	
	$('.catalog.slider').slick({
	    dots: false,
	    arrows: true,
	    infinite: true,
            speed: 1000,
	    slidesToShow: 4,
	    slidesToScroll: 1,
		//centerMode: true,
	    //variableWidth: true,
		prevArrow: '<span class="slick-prev">&nbsp;</span>',
		nextArrow: '<span class="slick-next">&nbsp;</span>',
		responsive: [
		  {
		    breakpoint: 1501,
		    settings: {
		      slidesToShow: 3,
		    }
		  },
		  
		  {
		    breakpoint: 1151,
		    settings: {
		      slidesToShow: 2,
		    }
		  },
		  {
		    breakpoint: 701,
		    settings: {
		      slidesToShow: 1,
		    }
		  },
		]
	});

	
	$('.images_slider .main_img').slick({
	    slidesToShow: 1,
	    slidesToScroll: 1,
	    arrows: false,
	    fade: true,
	    //variableWidth: true,
	    adaptiveHeight: true,
	    asNavFor: '.images_slider .small_images',
	    responsive: [
		  {
		    breakpoint: 451,
		    settings: {
		      arrows: true,
		      prevArrow: '<span class="slick-prev">&nbsp;</span>',
		      nextArrow: '<span class="slick-next">&nbsp;</span>',
		    }
		  },
		]
	  });
	$('.images_slider .small_images').slick({
	    slidesToShow: 3,
	    slidesToScroll: 1,
	    arrows: true,
	    prevArrow: '<span class="slick-prev">&nbsp;</span>',
	    nextArrow: '<span class="slick-next">&nbsp;</span>',
	    asNavFor: '.images_slider .main_img',
	    dots: false,
	    //centerMode: true,
	    //vertical: true,
	    //focusOnSelect: true,
	    responsive: [
		  {
		    breakpoint: 601,
		    settings: {
		      slidesToShow: 2,
		    }
		  },
		]
	});
	


});