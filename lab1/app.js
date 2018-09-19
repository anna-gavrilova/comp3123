var moment=require('moment');

var greet= function(){
    var wrapped=moment(new Date());
    console.log(wrapped);
}

// function greet(name){
//     for(var i=0;i<10;i++){
//         console.log("Hello, World!");
//         getCurrentDateAndTime();
//     }
    
// }

// function getCurrentDateAndTime(){
//     var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
//     var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
//     var today=new Date();
//     var dd=today.getDate();
//     var mm=months[today.getMonth()];
//     var dayOfWeek=days[today.getDay()];
//     var date=mm+","+dd+" "+dayOfWeek;
//     var time=today.getHours()+":"+today.getMinutes();
//     console.log("Current date:"+date+" Current time:"+time);
// }

greet()