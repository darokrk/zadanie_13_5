// importujemy modul

var os = require('os');
var OSinfo = require('./modules/OSinfo');
var time = require('./modules/time');
var colors = require('colors');


process.stdin.setEncoding('utf-8');
process.stdout.write('Hello in Node app\n' +
					'to run functions write:\n' + 
					'/exit' + ' to exit from application\n' +
					'/info' + ' to get informations of Node version and System Language\n' +
					'/getOSinfo' + ' to get informations about your System\n');

// ustawienie nasluchiwania na zdarzenia odczytu

process.stdin.on('readable', function() {
	// metoda .read() ma za zadanie odczytać co użytkownik podał na wejściu
	var input = process.stdin.read();
	if (input !== null) {
		var instruction = input.toString().trim();
		switch (instruction) {
			case '/exit':
				process.stdout.write('Quitting app!');
				process.exit();
				break;
			case '/info':
			// moze byc tez console.log();
				process.stdout.write('Your version Node.js: '.red + process.versions.node + '\n' + 'System Language: '.green + process.env.LANG + '\n');
				break;
			case '/getOSinfo':
				OSinfo.print();
				break;
			default:
				process.stderr.write('Wrong instruction!\n');
		}
	}
});