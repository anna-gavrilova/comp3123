const fs=require('fs');
const file=fs.createWriteStream('./write.txt');

var writeData=function(){
    for(let i=0;i<10;i++){
        file.write('This is some data on line \n'+i+1);
    }

    file.end();
}

module.exports={
    writeData: writeData
}