$(document).ready(function(){

	$('.slider__inner, #slider2.slider__inner').slick({
	nextArrow:'<button type="button" class="slick-btn slick-next"></button>',
	prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
	infinite: false
	});
	
	$('.service__list-title').click(function(){
		$('.service__list-active').slideToggle(1000);
		$('.service__list-active2').slideUp(1000);
		$('.service__list-active3').slideUp(1000);
		
	});

	$('.service__list-title2').click(function(){
		$('.service__list-active2').slideToggle(1000);
		$('.service__list-active').slideUp(1000);
		$('.service__list-active3').slideUp(1000);
	});

	$('.service__list-title3').click(function(){
		$('.service__list-active3').slideToggle(1000);
		$('.service__list-active').slideUp(1000);
		$('.service__list-active2').slideUp(1000);
		
	});

	$('.burger').on('click',function(){
		$('.header__nav').slideToggle(1000);
	});
	

	$('.about__animate').click(function(){

		 $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 1000);
    return false;
});

		$('.blog__animate').click(function(){

		 $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 2000);
    return false;
});


		$('.sevice__animate').click(function(){

		 $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 2000);
    return false;
});

		$('.work__animate').click(function(){

		 $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 2000);
    return false;
});
		$('.contact__animate').click(function(){

		 $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 3000);
    return false;
});
	$('.up').click(function(){

		 $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 1500);
    return false;
});	


	$('.service__list-title').click(function(){
		$('.sevice__list-up').toggleClass('sevice__list-up-active')

	});	

	$('.service__list-title2').click(function(){
		$('.sevice__list-up').toggleClass('sevice__list-up-active')

	});	

$('.service__list-title3').click(function(){
		$('.sevice__list-up').toggleClass('sevice__list-up-active')

	});	



});

