/**
 * index.js
 * @date    2014-10-09 15:09:21
 * @version 1.00
 */
$(function() {
	var items = $(".item");
	var angel = Math.PI / (items.length - 1);
	for (var i = 0; i < items.length; i++) {
		var pos = {
			x: 0,
			y: 0,
			z: 0
		};
		var rgba = {
			r: 255,
			g: 255,
			b: 255,
			a: 1
		};
		if ($(".anitOut").width() > $(".anitOut").height()) {
			var centerPos = ($(".anitOut").height() - $(".itembtn").width()) / 2;
		} else {
			var centerPos = ($(".anitOut").width() - $(".itembtn").width()) / 2;
		}
		pos.x = Math.floor(centerPos - centerPos * Math.cos(angel * i));
		pos.y = -Math.floor(centerPos * Math.sin(angel * i));
		$(items[i]).css({
			'-webkit-transform': "translate3d(" + pos.x + "px," + pos.y + "px," + pos.z + "px)",
			'-o-transform': "translate3d(" + pos.x + "px," + pos.y + "px," + pos.z + "px)",
			'-ms-transform': "translate3d(" + pos.x + "px," + pos.y + "px," + pos.z + "px)",
			'-moz-transform': "translate3d(" + pos.x + "px," + pos.y + "px," + pos.z + "px)",
			'transform': "translate3d(" + pos.x + "px," + pos.y + "px," + pos.z + "px)",
			"z-index": "" + Math.floor(pos.y) * -1
		});
		var red, green, blue;
		Math.sin(angel * i) > 0 ? red = Math.sin(angel * i) : red = -1 * Math.sin(angel * i);
		Math.atan(angel * i) > 0 ? green = Math.atan(angel * i) : green = -1 * Math.atan(angel * i);
		Math.cos(angel * i) > 0 ? blue = Math.cos(angel * i) : blue = -1 * Math.cos(angel * i);
		$(items[i]).children(".itembtn").css({
			'-webkit-transform': " rotate(" + Math.cos(angel * i) * (360 / items.length) * -1 + "deg)",
			'-o-transform': " rotate(" + Math.cos(angel * i) * (360 / items.length) * -1 + "deg)",
			'-ms-transform': " rotate(" + Math.cos(angel * i) * (360 / items.length) * -1 + "deg)",
			'-moz-transform': " rotate(" + Math.cos(angel * i) * (360 / items.length) * -1 + "deg)",
			'transform': " rotate(" + Math.cos(angel * i) * (360 / items.length) * -1 + "deg)",
			"background-color": "rgba(" + Math.ceil(rgba.r * red) + "," + Math.ceil(rgba.g * green) + "," + Math.ceil(rgba.b * blue) + "," + rgba.a + ")"
		});
	}
	var changePos = function() {
		var items = $(".item");
		for (var i = 0; i < items.length; i++) {
			if (i == items.length - 1) {
				var next = 0;
			} else {
				var next = i + 1;
			}
			$(items[i]).css({
				'-webkit-transform': $(items[next]).css('-webkit-transform'),
				'-o-transform': $(items[next]).css('-o-transform'),
				'-ms-transform': $(items[next]).css('-ms-transform'),
				'-moz-transform': $(items[next]).css('-moz-transform'),
				'transform': $(items[next]).css('transform'),
				"z-index": $(items[next]).css("z-index")
			});
			$(items[i]).children(".itembtn").css({
				'-webkit-transform': $(items[next]).children(".itembtn").css('-webkit-transform'),
				'-o-transform': $(items[next]).children(".itembtn").css('-o-transform'),
				'-ms-transform': $(items[next]).children(".itembtn").css('-ms-transform'),
				'-moz-transform': $(items[next]).children(".itembtn").css('-moz-transform'),
				'transform': $(items[next]).children(".itembtn").css('transform'),
				"background-color": $(items[next]).children(".itembtn").css('background-color'),
			});
		}
	};
	window.setInterval(changePos, 5000);
});