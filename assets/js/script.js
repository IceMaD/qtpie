$(function() {
// Thanks to Anders Grimsrud for the base : http://codepen.io/agrimsrud/pen/EmCoa
	qtpie = {
		init : function(id) {
			base = 0;
			$paths = $(id).find('path');
			$paths.each(function(index, el) {
				deg = 3.6*$(this).attr('data-pie');
				qtpie.draw({
					slice  : $(this),
					degree : deg,
					base   : base
				});
				base += parseInt(deg);
			});
			$(id).find('circle').css('fill',$('body').css('background-color'));
			$paths.click(function(event) {
				$(this)
					.parent().parent()
					.find('.inside')
					.css('color',$(this).css('fill'))
					.html($(this).attr('data-desc')+'<br>'+$(this).attr('data-pie')+'%');
			});
			$(id).show();
		},
		draw : function(options) {
			var defaultOptions = {
					slice  : null,
					degree : 0,
					base   : 0
				};

			options = $.extend({}, defaultOptions, options);

			options.degree++;

			var rayon = ( options.degree * Math.PI / 180),
				x     = Math.sin( rayon ) * 100,
				y     = Math.cos( rayon ) * - 100,
				mid   = ( options.degree > 180 ) ? 1 : 0,
				anim  = 'M 0 0 v -100 A 100 100 1 ' + mid + ' 1 ' + x + ' ' + y + ' z';
			options.slice.attr( 'd', anim ).attr('transform', 'translate(100, 100) rotate('+base+')');
		}
	}
});