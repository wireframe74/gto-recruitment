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
		if (l < 0) {
			$uls.css({'margin-left':'0px','width':w+'px','max-width':w+'px','padding-left':'10px','padding-right':'10px','box-sizing':'border-box'});
		} else {
			$uls.css({'margin-left':-l+'px','width':w+'px','max-width':w+'px','padding-left':l+'px','padding-right':l+'px','box-sizing':'border-box'});
		}
		if (w > 2500 && !$top_container.hasClass('xtra-wide')) {
			$top_container.addClass('xtra-wide');
// stop changing the background size 20150612
//			$top_container.css('background-size','100% 305px');
		} else if (w <= 2500 && $top_container.hasClass('xtra-wide')) {
			$top_container.removeClass('xtra-wide');
//			$top_container.css('background-size','2500 305px');
		}
	};
	$win.resize(setWidths);
	setTimeout(setWidths,200);

	// // ai legal scroll
	// $win.scroll(function() {
	// 	var scrolltop = $win.scrollTop();
	// 	var w = $body.innerWidth();
	// 	if (w <= 800) {
	// 		if (!$body.hasClass('small')) {
	// 			$body.addClass('small');
	// 			$body.removeClass('large');
	// 		}
	// 	} else if (scrolltop <= 0) {
	// 		$body.addClass('large');
	// 		$body.removeClass('small');
	// 	} else if (!$body.hasClass('small')) {
	// 		$body.addClass('small');
	// 		$body.removeClass('large');
	// 	}
	// });
	// $win.scroll();
 
	// form element placeholders
	$(":input[placeholder]").placeholder();

// info tabs
	var current = 'current-info-tab',hashes = [],$info_content;
	var $atabs = $('ul.info-tabs a').click(function(e) {
		e.preventDefault();
		$atabs.parent('li').removeClass(current);
		$(this).parent('li').addClass(current);
		$info_content.hide();
		$(this.hash).show();
	}).each(function(i) {
		hashes.push(this.hash);
	});
	$info_content = $(hashes.join(','));
	for (var i=0; i<hashes.length; i++) {
		if (hashes[i] == location.hash) {
			$atabs.eq(i).click();
			break;
		}
	}
});