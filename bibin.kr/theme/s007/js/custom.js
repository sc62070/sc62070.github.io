/*모바일 네비게이션 동작*/
( function() {
	$(document).ready(function() {
		
		// Mobile menu accordion - Hearder mobile navigation 헤더 모바일 버전 네비게이션 아코디언효과
		$('.mobile-side-menu').find('.mmenu-toggle').on('click', function (e) {
			var closestLi = $(this).closest('li');

			if(closestLi.hasClass('open')==true){
				$('.mobile-side-menu .dropdown ul').slideUp();
				closestLi.children('ul').slideUp(300, function () {
					closestLi.removeClass('open');
				});
				return false
			}{
				if (closestLi.find('ul').length) {
					$('.mobile-side-menu .dropdown').removeClass('open');
					$('.mobile-side-menu .dropdown ul').slideUp();
					closestLi.children('ul').slideDown(300, function () {
						closestLi.addClass('open');
					});
					e.preventDefault();
				}
			}
		});

		// Mobile menu show/hide  - Hearder mobile navigation 헤더 모바일 버전 네비게이션 쇼/하이드
		$('.mmenu-toggle-btn, #mobile-menu-overlay').on('click', function (e) {
			$('.body').toggleClass('mmenu-open');
			e.preventDefault();
		});	
		
		$('.main-subbanner a').mouseover(function(){
			var dir = $(this).children().attr("dir");
			$(this).children().attr('src',dir+'/img/mainbanner_arrow_over.png');
			$(this).children().stop().animate({
				left:'70px'
			});
		}).mouseout(function(){
			var dir = $(this).children().attr("dir");
			$(this).children().attr('src',dir+'/img/mainbanner_arrow.png');
			$(this).children().stop().animate({
				left:'15px'
			});
		})
		
	});
}());


/*스크롤 처리*/
$('a.scroll-to').on('click', function () {
	var $anchor = $(this);
	var hd_h = $('.header-body').height();
	
	$('html, body').stop(true, false).animate({
		scrollTop: $($anchor.attr('href')).offset().top-hd_h
	}, 1500, 'easeInOutExpo');

	$('.body').removeClass('mmenu-open');
	return false;
});



$('.snsBox li').mouseover(function(){
	$('.snsBox li').removeClass('act');
	$(this).addClass('act');
})
$('.snsBox li').mouseout(function(){
	$('.snsBox li').removeClass('act');
	$('.snsBox .first').addClass('act');
})