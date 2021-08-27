$(document).ready(function(){
	$('.menu-burger').click(function(event){
		$('.menu-burger, .menu, .lang-menu').toggleClass('active');
		$('body').toggleClass('lock');
		$('.lang-menu').detach().appendTo('.menu');
	});

	$('.menu li a').click(function(event) {
        $('.menu-burger, .menu').removeClass('active');
        $('body').removeClass('lock');
    });

	$(window).resize(function () {
  		WindowWidth = $(window).width();
   		if (WindowWidth > 768){
      	$('.lang-menu').detach().appendTo('.header-container');
   		}
  	});

  	$('.slider').slick({
  		dots:true,
  		speed:1000,
  		autoplay:true,
  		autoplaySpeed:4000,
  		pauseOnHover:false,
  		pauseOnFocus:true,
  		pauseOnDotsHover:false,
  		slidesToShow:1,
  		fade:false,
  		vertical:false,
  		swipe:true,
  		responsive: [
		    {
		      breakpoint: 1025, // - от какой ширины изменять настройки(1024 и ниже)
		      settings: {
		        // вносим изменения на ширине 1024 и ниже 
		        arrows:false,
		        appendDotsto: $('.portfolio-container'),
		      }
		    },
		    {
		      breakpoint: 480, // брекпоинтов может быть сколько угодно
		      settings: {
		      	dots:true,
		        arrows:false,
		        appendDotsto: $('.portfolio-container'),
		        variableWidth: true,
		        swipe: true,
		      }
		    }
		  ]
  	});

  	$('.slick-dots').detach().appendTo('.portfolio-container');

  	$(window).scroll(function() {
		if ($(this).scrollTop() > 1){
		$('header').addClass("sticky");
		}
		else{
		$('header').removeClass("sticky");
		}
	});

  	$("a.scrollto").click(function () {
	elementClick = jQuery(this).attr("href")
	destination = jQuery(elementClick).offset().top-70;
	$("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 400);
	return false;
	});

	$('.slider-item__btn_watch').click(function(event){
		$('.popup-slider').toggleClass('active');
		$('body').toggleClass('lock');
		
	});

	$('.exit-btn').click(function(event){
		$('.popup-slider').toggleClass('active');
		$('body').toggleClass('lock');
		$('.popup-slider__big-img').each(function(){
    		if($(this).hasClass('active')){
    			$(this).removeClass('active');
    		}
    	});
	});

	if ($(window).width() < 768) {
 		
 		$('.slider').on('click', '.slider-item__btn_watch', function() {
    		var ind = ($(this).parent().parent().parent().index());
    		$('.popup-slider__big-img').each(function(){
    			if($(this).index() == (ind - 6) ){
    				$(this).toggleClass('active');
	    		}
	    	});
	    });
 	 }


	$('.slider').on('click', '.slider-item__btn_watch', function() {
    	var ind = ($(this).parent().parent().parent().index());
    	$('.popup-slider__big-img').each(function(){
    		if($(this).index() == ind ){
    			$(this).toggleClass('active');
    		}
    	});
    });
});