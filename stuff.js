var counter = function(arr) {

    return 'this arr has ' + arr.length + ' element';

}

var adder = function(a,b) {

    return `sum of the 2 numbers is ${a+b}`;
}

/**
  module.exports.adder = function(a,b) {

    return `sum of the 2 numbers is ${a+b}`;
}

 */

//module.exports.counter = counter;


module.exports = {
    
    counter:counter,
    adder:adder

}