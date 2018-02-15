
var os = require('os');
var colors = require('colors');

function time() {
	var uptime = os.uptime();

	var hour = Math.round(uptime / 3600);
	if (hour < 0) {
		hour = '0' + hour;
	}

	var minutes = Math.round((uptime % 3600) / 60);
	if (minutes < 0) {
		minutes = '0' + minutes;
	}

	var seconds = Math.round(uptime % 60);
	if (seconds < 10) {
		seconds = ('0' + seconds);
	}
	return console.log('Uptime: ~ '.rainbow + hour + ' hours ' + minutes + ' minutes ' + seconds + ' seconds');
}

exports.printTime = time;