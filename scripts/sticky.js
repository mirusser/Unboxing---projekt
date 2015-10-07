$(document).ready(function(){
	var navY = $('#top').offset().top;

	var stickyNav = function(){
		var scrollY = $(window).scrollTop();

		if(scrollY > navY)
		{
			$('#top').addClass('sticky');
			$('.content').css('padding-top', '3%');
			$('.navR').css('padding-top', '50px');
			$('.navL').css('padding-top', '50px');
			$('ol>li').css('padding-bottom', '1%');
			$('ol >li >ul >li').css('padding-bottom', '0');
		}
		else
		{
			$('#top').removeClass('sticky');
			$('.content').css('padding-top', '3%');
			$('.navR').css('padding-top', '0');
			$('.navL').css('padding-top', '0');
			$('ol>li').css('padding-bottom', '0');
			$('ol >li >ul >li').css('padding-bottom', '0');
		}
	};

	stickyNav();

	$(window).scroll(function(){
		stickyNav();
	});
});