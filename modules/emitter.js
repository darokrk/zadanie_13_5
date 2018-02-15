
var event = require('events');
var EventEmitter = event.EventEmitter;
var OSinfo = require('./OSinfo')

//utworzenie obiektu na podstawie klasy EventEmitter

var emitter = new EventEmitter();

//dodajemy dwa nasluchiwania na zdarzenia

emitter.on('beforeCommand', function(instruction) {
	console.log('You wrote: ' + instruction + ' trying to run command.')
});
emitter.on('afterCommand', function() {
	console.log('Finished command');
});
