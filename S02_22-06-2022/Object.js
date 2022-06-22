var student = {
  name: "Rahul",
  city: "Delhi",
  phone: 999999,
};

console.log(student);

//Access a Property in JS
console.log(student.city);
console.log(student.phone);

//Insert new Property
student.email = "Rahul@gmail.com";

student.id = 10001;
console.log(student);

//Update the Property Value
student.city = "Banglore";
console.log(student);
student.name = "Raj"; //updation
student.name1 = "Raj"; //insertion

//delete any Property

delete student.city;
delete student.id;

console.log(student);
