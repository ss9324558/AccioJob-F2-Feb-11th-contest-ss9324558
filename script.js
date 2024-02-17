/** @format */

let arr = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];

function PrintStudentswithMap() {
  //Write your code here , just console.log
  arr.map((a) => {
    a.marks > 50 && console.log(a);
  });
}

function PrintStudentsbyForEach() {
  //Write your code here , just console.log
  arr.forEach((a) => {
    a.marks > 50 && console.log(a);
  });
}

function addData() {
  //Write your code here, just console.log
  const id = arr[arr.length - 1].id + 1;
  const names = prompt("Enter the name of the Student");
  const age = prompt("Enter the age of the Student");
  const marks = prompt("Enter the marks of the Student");

  const newObj = {
    id: id,
    name: names.trim(),
    age: age.trim(),
    marks: Number(marks.trim()),
  };
  arr.push(newObj);
  console.log(newObj);
}

function removeFailedStudent() {
  //Write your code here, just console.log
  arr = arr.filter((a) => {
    return a.marks >= 50;
  });

  console.log(arr);
}

function concatenateArray() {
  //Write your code here, just console.log
  let newArr = [
    { id: arr[arr.length - 1].id + 1, name: "subash", age: "18", marks: 95 },
    { id: arr[arr.length - 1].id + 2, name: "nirmal", age: "20", marks: 49 },
    { id: arr[arr.length - 1].id + 3, name: "aravind", age: "19", marks: 53 },
  ];
  arr = arr.concat(newArr);
  console.log(arr);
}
