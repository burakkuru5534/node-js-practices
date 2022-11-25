var fs = require('fs');


var myReadableStream = fs.createReadStream(__dirname + '/mytextfilefrom.txt', 'utf8');
var myWritableStream = fs.createWriteStream(__dirname + '/mytextfileto.txt');



myReadableStream.on('data',function(chunk){

    console.log('new chunk received:');
    //console.log(chunk); // we can see the chunk of data 

    myWritableStream.write(chunk);

});