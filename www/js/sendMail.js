function sendResponse() {
	window.plugin.email.isServiceAvailable(
		function (isAvailable) {
			window.plugin.email.open({
				to:          ['terrencepenner@gmail.com'],
				subject:     'H2BAC Response',
				body:        '<h3>TEST</h3><h2>TEST</h2><h1>TEST</h1>',
				isHtml:      true
			});
		}
	);
}

var size = {
	SMALL: 0.1,
	MEDIUM: 0.2,
	LARGE: 0.3
};

function setScale(scaleFactor) {
	var scaleSource = $('body').width();
	var fontSize = scaleSource * scaleFactor;

	$('body').css('font-size', fontSize + '%');
}