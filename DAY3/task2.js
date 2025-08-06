var student ={
    name : "botina",
    age : 22,
    grad : "B+",
    IsGraduated : false
};
console.log(`student name ${student.name}`);
console.log(`student age ${student.age}`);
student.grad = "A+";
console.log("properties (keys):" , Object.keys(student));
console.log("values:" , Object.values(student));
student.email = "bosinamarwan58@gmail.com";
delete student.IsGraduated;
console.log("updated data:" , student)




