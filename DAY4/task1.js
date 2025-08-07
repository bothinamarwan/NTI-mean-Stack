function multiply (x,y){
    return  x*y;
}
function calculate(num1 , num2, operation){
    var result = operation(num1,num2);
    console.log(result);   
}
function displayResult(result) {
    console.log("the result is : ", result);
    
}
calculate(5,8,multiply);