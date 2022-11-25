var fs = require('fs');


//var myTextFile = fs.readFileSync('mytextfile.txt','utf8');

//console.log(myTextFile);

//fs.writeFileSync('copyOfmyTextFile.txt',myTextFile);


fs.readFile('mytextfile.txt','utf8', function(err,data){

  err ? console.log('error: '+ err) : console.log('content of mytextfile file: '+ data);

    fs.writeFile('copyOfmyTextFile.txt','hope is dangerous. It may lead to make you crazy god damn it!.', function(err,data){
        var myTextFile = fs.readFileSync('copyOfmyTextFile.txt','utf8');
        console.log('content of copyOfmyTextFile: '+ myTextFile);


    });

});


