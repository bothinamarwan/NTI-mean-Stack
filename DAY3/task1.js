var numbers = [10,20,-30,40,-25,50,15,-5,60,-35];
var positiveSum =0;
var sum = 0;
for (let i = 0;  i< numbers.length; i++) {
   sum = sum + numbers[i];
  if (numbers[i] <0) {
    continue    
  }
   positiveSum +=numbers[i];
}
console.log(`sum of positives: ${positiveSum}`);
console.log(`sum of all : ${sum}`);
numbers.push(55);
numbers.shift(0);
console.log(`update array :${numbers}`);

 

