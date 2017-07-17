jQuery(window).load(function() {
	var ids = ['#rightcolumn','#newscolumn'];
	var j,d = [];
	for (var i=0; i<ids.length; i++) {
		j = jQuery(ids[i]);
		if (j.length) {
			d[i] = {'$j':j};
			d[i].o = d[i].$j.offset();
			//d[i].o.top -= 143;//add the height of the top banner oojit
			d[i].h = d[i].$j.height();
		}
	}
	if (d.length == 0) {
		return;
	}

	var bannerheight = 170;// match this .fixed in the style sheet
	var $w = jQuery(window);
	var fo = jQuery('#aigwd-footerWidgets').offset();
	$w.scroll(function () {
		var scrollTop = $w.scrollTop(); // check the visible top of the browser
		for (var i=0; i<d.length; i++) {
			if (scrollTop + d[i].h + bannerheight > fo.top) {
				d[i].$j.removeClass('fixed');
				d[i].$j.addClass('at-bottom');
			} else if (d[i].o.top<scrollTop + bannerheight)  {
				d[i].$j.removeClass('at-bottom');
				d[i].$j.addClass('fixed');
			} else {
				d[i].$j.removeClass('at-bottom');
				d[i].$j.removeClass('fixed');
			}
		}
	});
});
