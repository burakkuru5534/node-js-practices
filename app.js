var fs = require('fs');
var http = require('http');


var server = http.createServer(function(req,res){

    console.log('request was made', req.url);
    res.writeHead(200,{'Content-Type': 'text/plain'});
    var myReadableStream = fs.createReadStream(__dirname + '/mytextfilefrom.txt', 'utf8');
    myReadableStream.pipe(res); 
    // we can use pipe with only readable streams. it provides to make otomatically transfer data when buffer get fulled 
    // otherwise we used to do that with readablestream.on and define a callback function and send that data manually.
});

server.listen(3000,'127.0.0.1');
console.log('listening port: ' + 3000);