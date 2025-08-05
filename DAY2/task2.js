var name = prompt("Enter your name:");
var age = prompt("Enter your age:");
var experience = prompt("Enter your years of experience:");
var rating =prompt("Rate yourself from 1 to 10:");
age = Number(age);
experience = Number(experience);
rating = Number(rating);


if (experience < 2) {
  console.log("Junior");
} else if (experience >= 2 && experience <= 5) {
  console.log("Mid-Level");
} else if (experience > 5 && experience <= 10) {
  console.log("Senior");
  
} else {
 console.log("Expert");
}

switch (true) {
  case (rating >= 9):
   console.log("Excellent");
   
    break;
  case (rating >= 7 && rating < 9):
      console.log("Good");

    break;
  case (rating >= 5 && rating < 7):
      console.log("Average");
    break;
  default:
      console.log( "Needs Improvement");

}
var baseSalary = 10000;
var bonus = 0;

if (experience < 3) {
  bonus = baseSalary * 0.10;
} else if (experience >= 3 && experience <= 5) {
  bonus = baseSalary * 0.15;
} else {
  bonus = baseSalary * 0.20;
}

var finalSalary = baseSalary + bonus;
var currentHour = new Date().getHours();
var shift = (currentHour >= 9 && currentHour < 18) ? "Day Shift" : "Night Shift";

var summary = `
Name: ${name}
Age: ${age}
Experience: ${experience} years
Performance: ${performance}
Final Salary: ${finalSalary} EGP
Shift: ${shift}
`;

console.log(summary);
alert(summary);
document.getElementById("output").innerText = summary;