const request=require('request')
const fs=require('fs')

request('http://www.google.com',function(err,res,body){
    const file=fs.createWriteStream("./output.html");
    file.write(body);

})


