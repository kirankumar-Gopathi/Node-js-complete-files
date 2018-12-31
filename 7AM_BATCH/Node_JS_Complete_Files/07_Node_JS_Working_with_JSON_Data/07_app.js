// Create an Object
let student = {
    name : 'Mahesh',
    age : 25,
    course : 'Engineering',
    address : {
        city : 'Hyderabad',
        country: 'India'
    }
};
console.log(student);

// convert an object to String
let studentString = JSON.stringify(student);
console.log(studentString);

// Create a String
let tempStr = '{"name":"Mahesh","age":25,"course":"Engineering","address":{"city":"Hyderabad","country":"India"}}';

// Convert string to an Object
let studentObj = JSON.parse(tempStr);
console.log(studentObj);

