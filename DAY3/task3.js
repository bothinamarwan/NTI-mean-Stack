var students = [
  { name: "bothina", age: 22, grade: "B+", isGraduated: false },
  { name: "mariam", age: 25, grade: "A", isGraduated: true },
  { name: "aya", age: 21, grade: "C", isGraduated: false }
];

var totalage = 0;
var graduatedcount = 0;
var notgraduatedcount = 0;

for (var i = 0; i < students.length; i++) {

  totalage += students[i].age;

  if (students[i].isGraduated) {
    graduatedcount++;
  } else {
    notgraduatedcount++;
  }
}
var averageAge = totalage / students.length;

for (let i = 0; i < students.length; i++) {
     console.log("Student  Keys:", Object.keys(students[i]));
  console.log("Student Values:", Object.values(students[i]));
    
}

var newstudent = {
  name: "Mona",
  age: 28,
  grade: "D",
  isGraduated: false
};
newstudent.email ="mona@gmail.com"
students.push(newstudent);

for (var i = 0; i < students.length; i++) {
  delete students[i].isGraduated;
}

console.log("student names:");
for (var i = 0; i < students.length; i++) {
  console.log(students[i].name);
}
console.log("Average Age:", averageAge);
console.log("Graduated Students:", graduatedcount);
console.log("Not Graduated Students:", notgraduatedcount);