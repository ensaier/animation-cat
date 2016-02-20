var cat = (function(){
	var handleLeftEye = function (event) {
		var eye = $('#leftEye .pupil');

		var proportion = $('#leftEye').width() * event.clientX / $('body').width() * 0.5;

		eye.css({
			left: proportion
		});

	}

	var handleRightEye = function (event) {
		var eye = $('#rightEye .pupil');

		var proportion = $('#leftEye').width() * event.clientX / $('body').width() * 0.5;

		eye.css({
			left: proportion
		});

	}

	return {
		initialize: function() {
			$('body').bind('mousemove', this.handleCat);
		},
		handleCat: function() {
			handleLeftEye(event);
			handleRightEye(event);
		}
	}

})();

cat.initialize();