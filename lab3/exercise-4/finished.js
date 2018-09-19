var max=50;
var handleCounter=function(err,counter,waitTime,timeStamp){
    if(err){
        console.log(err);
    }else{
        console.log("Callback ounter:",counter,"waitTime:",waitTime,"TimeStamp:",timeStamp)
    }
}

var callBackWait=function(counter,callback){
    var waitTime=Math.random()*100;
    var timeStamp = Math.floor(Date.now() / 1000);

    if(waitTime>max){
        var err=new Error("The wait time has exceeded the maximum time");
        handleCounter(err);
    } else{

        setTimeout(()=>callback(err,counter,waitTime,timeStamp));
    }

}


for(var i=0;i<10;i++){
    callBackWait(i,handleCounter)
}