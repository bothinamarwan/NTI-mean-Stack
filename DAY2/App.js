var clientname = prompt("pleas enter your name");
var birthyear = prompt("please enter your birth year");
var isstudent = confirm("are you student");

birthyear = +birthyear;
var currentyear = new Date().getFullYear();
var age = currentyear - Number(birthyear);

var message ="hello" +" "+ clientname + " you are"+" " + age +" "+ "years old";
 console.log(message)
 
if(age<13)
    console.log("you are kid")
else if(age >=13 && age <=17)
    console.log("you are teenager");
else if (age >=18 && age <=59)
    console.log("you are adult");
else
    console.log("senior");
 

var message = isstudent === true ? "dont forget to study hard" : null;
console.log(message);
alert(message)

document.getElementById("output").innerText = message;
    
    
    