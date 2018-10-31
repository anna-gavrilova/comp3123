var express=require('express');
var app=express();
var mongoose=require('mongoose');

mongoose.connect('mongodb://admin:adminadmin1@ds127843.mlab.com:27843/mytestdb');
var port=process.env.PORT || 3000;
app.listen(port);

var Schema= mongoose.Schema;
var userSchema=new Schema({
    name:String,
    status:String
})
var User=mongoose.model('User',userSchema);
var john=User({name:'John',status:'Active'})

john.save(function(err){
    if(err) throw err;

    console.log('user saved');
})
