
$(document).ready(function () {
	var $window = $(window);
	var winHeightPadded = $window.height() *1.1;
	var isTouch = Modernizr.touch;

	if (isTouch) {
		$('.scroll').addClass('animated');
	}

	$window.on('scroll', onScrollAnimation);

	function onScrollAnimation () {
		var scrolled = $window.scrollTop();

		$('.scroll:not(.animated)').each(function () {
			var $this = $(this);
			var offSetTop = $this.offset().top;

			if (scrolled + winHeightPadded > offSetTop) {
				if ($this.data('timeout')) {
					window.setTimeout(function () {
						$this.addClass('animated ' + $this.data('animation'));
					}, parseInt($this.data('timeout'), 10));
				} else {
					$this.addClass('animated ' + $this.data('animation'));
				}
			}
		});
	}

	onScrollAnimation();

	$(document).foundation();

});