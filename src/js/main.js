///// Back to Top /////
$(".back-to-top").hide();
$(window).on('scroll', ()=>$(this).scrollTop() > 100?$(".back-to-top").fadeIn("slow"):$(".back-to-top").fadeOut("slow"));
$(".back-to-top").on('click', ()=>$("html, body").animate({scrollTop: 0}, 750));
///// smooth scroll /////
$('a[href*="#"]:not([href="#"])').click(function() {
	if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
		let target = $(this.hash);
		target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		if (target.length) {
			$('html, body').animate({
				scrollTop: target.offset().top
			}, 1000);
			return false;
		}
	}
});
///// Hover Direction ////////
(function($, window, undefined) {
	$.HoverDir = function(options, element) {
		this.$el = $(element);
		this._init(options);
	};

	// the options
	$.HoverDir.defaults = {
		speed: 300,
		easing: "ease",
		hoverDelay: 0,
		inverse: false
	};
	$.HoverDir.prototype = {
		_init: function(options) {
			// options
			this.options = $.extend(true, {}, $.HoverDir.defaults, options);
			// transition properties
			this.transitionProp =
				"all " + this.options.speed + "ms " + this.options.easing;
			// load the events
			this._loadEvents();
		},
		_loadEvents: function() {
			let self = this;

			this.$el.on("mouseenter.hoverdir, mouseleave.hoverdir", function(event) {
				let $el = $(this),
					$hoverElem = $el.find(".hover"),
					direction = self._getDir($el, { x: event.pageX, y: event.pageY }),
					styleCSS = self._getStyle(direction);

				if (event.type === "mouseenter") {
					$hoverElem.hide().css(styleCSS.from);
					clearTimeout(self.tmhover);

					self.tmhover = setTimeout(function() {
						$hoverElem.show(0, function() {
							var $el = $(this);
							$el.css("transition", self.transitionProp);
							self._applyAnimation($el, styleCSS.to, self.options.speed);
						});
					}, self.options.hoverDelay);
				} else {
					$hoverElem.css("transition", self.transitionProp);
					clearTimeout(self.tmhover);
					self._applyAnimation($hoverElem, styleCSS.from, self.options.speed);
				}
			});
		},
		// credits : http://stackoverflow.com/a/3647634
		_getDir: function($el, coordinates) {
			// the width and height of the current div
			var w = $el.width(),
				h = $el.height(),
				// calculate the x and y to get an angle to the center of the div from that x and y.
				// gets the x value relative to the center of the DIV and "normalize" it
				x = (coordinates.x - $el.offset().left - w / 2) * (w > h ? h / w : 1),
				y = (coordinates.y - $el.offset().top - h / 2) * (h > w ? w / h : 1),
				// the angle and the direction from where the mouse came in/went out clockwise (TRBL=0123);
				// first calculate the angle of the point,
				// add 180 deg to get rid of the negative values
				// divide by 90 to get the quadrant
				// add 3 and do a modulo by 4  to shift the quadrants to a proper clockwise TRBL (top/right/bottom/left) **/
				direction =
					Math.round((Math.atan2(y, x) * (180 / Math.PI) + 180) / 90 + 3) % 4;

			return direction;
		},
		_getStyle: function(direction) {
			let fromStyle,
				toStyle,
				slideFromTop = { left: "0px", top: "-100%" },
				slideFromBottom = { left: "0px", top: "100%" },
				slideFromLeft = { left: "-100%", top: "0px" },
				slideFromRight = { left: "100%", top: "0px" },
				slideTop = { top: "0px" },
				slideLeft = { left: "0px" };

			switch (direction) {
				case 0:
					// from top
					fromStyle = !this.options.inverse ? slideFromTop : slideFromBottom;
					toStyle = slideTop;
					break;
				case 1:
					// from right
					fromStyle = !this.options.inverse ? slideFromRight : slideFromLeft;
					toStyle = slideLeft;
					break;
				case 2:
					// from bottom
					fromStyle = !this.options.inverse ? slideFromBottom : slideFromTop;
					toStyle = slideTop;
					break;
				case 3:
					// from left
					fromStyle = !this.options.inverse ? slideFromLeft : slideFromRight;
					toStyle = slideLeft;
					break;
			}
			return { from: fromStyle, to: toStyle };
		},
		// apply a transition or fallback to jquery animate based on Modernizr.csstransitions support
		_applyAnimation: function(el, styleCSS, speed) {
			$.fn.applyStyle = $.fn.css;
			el
				.stop()
				.applyStyle(styleCSS, $.extend(true, [], { duration: speed + "ms" }));
		}
	};
	var logError = function(message) {
		if (window.console) {
			window.console.error(message);
		}
	};
	$.fn.hoverdir = function(options) {
		let instance = $.data(this, "hoverdir");
		if (typeof options === "string") {
			let args = Array.prototype.slice.call(arguments, 1);
			this.each(function() {
				if (!instance) {
					logError(
						"cannot call methods on hoverdir prior to initialization; " +
						"attempted to call method '" +
						options +
						"'"
					);
					return;
				}
				if (!$.isFunction(instance[options]) || options.charAt(0) === "_") {
					logError("no such method '" + options + "' for hoverdir instance");
					return;
				}
				instance[options].apply(instance, args);
			});
		} else {
			this.each(function() {
				if (instance) {
					instance._init();
				} else {
					instance = $.data(this, "hoverdir", new $.HoverDir(options, this));
				}
			});
		}
		return instance;
	};
})($, window);
$(".portfolio-list .dir-wrapper").each(function() {
	$(this).hoverdir({ hoverDelay: 10, inverse: false });
});