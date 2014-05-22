$(function() {	
	
// Developed by IceMaD : marcduboc.fr
// Thanks to Anders Grimsrud for the base : http://codepen.io/agrimsrud/pen/EmCoa

	qtpie = {
		init : function(options) {

			var defaultOptions = {
				id         : '#qtpie',
				defaultMsg : 'Skills',
				radius     : 70
			}

			options = $.extend({}, defaultOptions, options);

			base = 0;
			$paths = $(options.id).find('path');
			$paths.each(function(index, el) {
				deg = 3.61*$(this).attr('data-pie');
				// 3.61 instead of 3.6 to fix little svg render bug
				qtpie.draw({
					slice  : $(this),
					degree : deg,
					base   : base
				});
				base += parseInt(deg);
			});

			$(options.id).find('circle').attr('r',options.radius);

			$(options.id).append('<div class="qtpieInside">'+options.defaultMsg+'</div>').find('circle').css('fill',$('body').css('background-color'));

			$paths.hover(function(event) {
				$(this)
					.parent().parent()
					.find('.qtpieInside')
					.css('color',$(this).css('fill'))
					.html($(this).attr('data-desc'));
			},function(){
				$(this)
					.parent().parent()
					.find('.qtpieInside')
					.removeAttr('style')
					.html(options.defaultMsg)
			});

			$(options.id).show();
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