var fs = require('fs');


var myReadableStream = fs.createReadStream(__dirname + '/mytextfile.txt', 'utf8');


myReadableStream.on('data',function(chunk){

    console.log('new chunk received:');
    //console.log(chunk); // we can see the chunk of data 
});