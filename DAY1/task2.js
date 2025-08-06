var UserName = "Bothina_Marwan";
var Password = "B582003B";
if (UserName ==="")
{
    alert("UserName isrequired");
}
else if(Password.length<8)
{
    alert("password must be at lest 8 characters");
       
}
else
{
    console.log("UserName: "+ UserName);
    console.log("PassWord: "+ Password);
}