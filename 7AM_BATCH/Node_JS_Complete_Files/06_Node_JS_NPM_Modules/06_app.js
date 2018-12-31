const _ = require('lodash');

// forEach
let array = ['HTML',100,'test','abc',200 ,'asdfa',5644];

let getMeCount = (array) => {
    let strCount = 0;
    let numCount = 0;
    _.forEach(array,(element) => {
        _.isString(element) ? strCount++ : strCount;
        _.isNumber(element) ? numCount++ : numCount;
    });
    return { strCount : strCount , numCount : numCount};
};

let count = getMeCount(array);
console.log(count);

// Filter Function
let employees = [
    {
        name : 'John',
        age : 45,
        desg : 'Manager',
        active : true
    },
    {
        name : 'Rajan',
        age : 25,
        desg : 'Software Engineer',
        active : false
    },
    {
        name : 'Williams',
        age : 35,
        desg : 'Tech Lead',
        active : false
    },
    {
        name : 'Laura',
        age : 23,
        desg : 'Software Engineer',
        active : true
    }
];

let activeEmployees = _.filter(employees,(employee)=>{
    return employee.active;
});
console.log(activeEmployees);

let inActiveEmployees = _.filter(employees,(employee)=> {
    return !employee.active;
});
console.log(inActiveEmployees);

let seniorEmployees = _.filter(employees,(employee)=> {
    return employee.age >= 35;
});
console.log(seniorEmployees);

let juniorEmployees = _.filter(employees,(employee)=> {
    return employee.age < 35;
});
console.log(juniorEmployees);