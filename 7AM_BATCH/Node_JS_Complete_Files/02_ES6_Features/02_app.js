/*
    Default params,
    Template Strings
    Arrow Functions
    let , const
    spread operators
    destructing
 */

// Default Parameters
function printMsg(name,age=30) {
    console.log('Hello ' + name + ' You are ' + age + ' Yrs Old');
    console.log(`Hello ${name} You are ${age} Yrs Old`);
}
printMsg('John');

// Let & Const
for(let i=1; i<=10; i++){
    //console.log(i); // 1 - 10
}
// console.log(i); // Cannot access outside the for loop

const course = 'Node JS';
console.log(course);
// course = 'Express JS'; // Assignment to const is not allowed

// Arrow Functions
let greetMe = function() {
    console.log('Iam Normal Function');
};
greetMe();

let greetMeArrow = () => {
    console.log('Iam an Arrow Function')
};
greetMeArrow();

let wishMe = (name) => {
    console.log(`Good Morning ${name}`);
};
wishMe('John');

let myArray = ['html','css','javascript','jquery','bootstrap'];
let output = '';
myArray.forEach((element) => {
    output += `${element.toUpperCase()} `;
});
console.log(output);

// Spread Operator(...)
let params = [121,456,466,48,65191,61,1896,14,468,46,-4];
let min = Math.min(...params);
console.log(`min : ${min}`);

// spread Operator
let array1 = [30,40,50];
let array2 = [10,20,...array1,60];
console.log(array2); // 10,20,30,40,50,60

// to create copy
let arr1 = ['HTML','CSS','JavaScript'];
let arr2 = [...arr1];
console.log(arr2);

// Destructing ES6
let employee = ['John',40,'Manager',75000];
/*
let eName = employee[0];
let eAge = employee[1];
let eDesg = employee[2];
let eSalary = employee[3];
*/
// Destructing
let [eName, eAge , eDesg , eSalary] = employee;
console.log(`eName : ${eName} Age : ${eAge} Desg : ${eDesg} Salary : ${eSalary}`);

// Swap using Destructing
let a = 10;
let b = 20;
[a , b] = [b , a];
console.log(`a : ${a} b: ${b}`);

