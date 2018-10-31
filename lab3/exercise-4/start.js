var handleCounter=function(result){
    console.log('The console count is',result);
}

function callbackLoop(n,func){
    for(let i=0;i<n;i++){
        func(i);
    }

    console.log('***Exiting callbback loop***')
}

callbackLoop(1,handleCounter);
callbackLoop(4,handleCounter);
callbackLoop(5,handleCounter);
callbackLoop(6,handleCounter);
callbackLoop(3,handleCounter);

