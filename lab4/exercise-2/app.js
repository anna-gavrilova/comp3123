const say=require('say');

say.speak('Hello!');
say.stop();
say.speak('Hello?','Alex',0.5)

setTimeout(saySorry,1000);
function saySorry(){
    say.speak("I am sorry,Dave!");
}