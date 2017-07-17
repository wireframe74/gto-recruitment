jQuery(document).ready(function() {
	// ai legal menu
	var $ = jQuery;
	var $uls = $('ul#megaUber>li>ul');
	var $win = $(window);
	var $body = $('body');
	var $top_container = $('#image-banner');
	var setWidths = function() {
		var w = $body.innerWidth();
		var l = (w-1240)/2;
		$uls.css({'margin-left':-l+'px','width':w+'px','max-width':w+'px','padding-left':l+'px','padding-right':l+'px','box-sizing':'border-box'});
		if (w > 1240 && !$top_container.hasClass('xtra-wide')) {
			$top_container.addClass('xtra-wide');
			$top_container.css('background-size','100% 270px');
		} else if (w <= 1240 && $top_container.hasClass('xtra-wide')) {
			$top_container.removeClass('xtra-wide');
			$top_container.css('background-size','1240px 270px');
		}
	};
	$win.resize(setWidths);
	setTimeout(setWidths,200);

	// ai legal scroll
	$win.scroll(function() {
		var scrolltop = $win.scrollTop();
		if (scrolltop == 0) {
			$body.addClass('header-big');
			$body.removeClass('header-small');
		} else if (!$body.hasClass('header-small')) {
			$body.addClass('header-small');
			$body.removeClass('header-big');
		}
	});
	$win.scroll();

	// form element placeholders
	$(":input[placeholder]").placeholder();

	// boxouts
	$('.boxout').click(function() {
		var $a = $(this).find('a');
		if ($a.length) location.href = $a.attr('href');
	}).css('cursor','pointer');

	// expertise tabs
	var current = 'current-expertise-tab',hashes = [],$expertise_content;
	var $atabs = $('ul.expertise-tabs a').click(function(e) {
		e.preventDefault();
		$atabs.parent('li').removeClass(current);
		$(this).parent('li').addClass(current);
		$expertise_content.hide();
		$(this.hash).show();
	}).each(function(i) {
		hashes.push(this.hash);
	});
	$expertise_content = $(hashes.join(','));
	for (var i=0; i<hashes.length; i++) {
		if (hashes[i] == location.hash) {
			$atabs.eq(i).click();
			break;
		}
	}
});