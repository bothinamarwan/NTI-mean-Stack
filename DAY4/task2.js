function greetuser() {
    setTimeout(function(){
        console.log("hello user");
    },3000)
}
greetuser();    //set timeout example

function countdowen() {
    var count = 10;
    var intervalid = setInterval(function(){
        console.log(count);
        count--;
        if (count===0) {
            console.log("time's up");
            clearInterval(intervalid);  
        }
        
    },1000)
}countdowen();  //2.setinterval example

function countstop() {
    var count =10;
    var intervalid = setInterval(function() {
        console.log(count);
        count--;
    },1000)
    setTimeout(function() {
        clearInterval(intervalid);
        console.log("stopped after 5 sec.");
    },5000)
}countstop();  //3.clear setinterval

function clearmessage() {
    var timeoutid=
    setTimeout(function(){
        console.log("this will be cleared");
    },5000)
     clearTimeout(timeoutid);
}clearmessage();  //4.clear settimeout 