var fs = require('fs');


// fs.unlink('writeMe.txt'); // be sure if file exists or not. if it's not exists then it would throw an error.

/*

fs.mkdir('stuff',function(){
    fs.readFile('readMe.txt','utf8',function(err,data){

        fs.writeFile('./stuff/writeMe.txt',data, function(err,data){

        });
    });
});

*/

// we should empty the directory first otherwise it would throw an error
fs.unlink('./stuff/writeMe.txt',function(){
    fs.rmdir('stuff', function(){});
})