const util = require('util');
const events = require('events');


var Person = function(name) {
  this.name = name;
}

util.inherits(Person, events.EventEmitter);


var marina = new Person('marina');
var olric = new Person('olric');
var drogo = new Person('drogo');

var people = [marina,olric,drogo];

people.forEach(function(person){

    person.on('speak', function(msg){
        console.log(person.name + ' said: ' + msg);
    });

});

marina.emit('speak','heyyo how are youuu');
drogo.emit('speak', 'where is my Queen?');
olric.emit('speak','what the hell I m doing here! ');





/*

we can easily create an emitter and use it with emit and send our message with it.

const { myEmitter } = require("./stuff");

var myEmitter = new events.EventEmitter();
myEmitter.on('someEvent',function(msg){
    console.log(msg)
});

myEmitter.emit('someEvent','kill me now!');

*/


