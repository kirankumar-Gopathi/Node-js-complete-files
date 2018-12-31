// basic Object
let mobile = {
    company : 'Lenovo',
    color : 'Black',
    ram : '4gb',
};
console.log(mobile);

// Nested Object
let student = {
    name : 'Mahesh',
    age : 25,
    course : 'Engineering',
    address : {
        city : 'Hyderabad',
        state : 'Telangana',
        country : 'India'
    }
};
console.log(student);

// Create an employee Array
let employees = [
    {
        name : 'John',
        age : 45,
        designation : 'Manager',
        active : true
    },
    {
        name : 'Williams',
        age : 35,
        designation : 'Sr.Tech Lead',
        active : false
    },
    {
        name : 'Rajan',
        age : 25,
        designation : 'Software Engineer',
        active : true
    }
];

// loop through an array
employees.forEach(employee => {
    console.log(employee);
});

// Filter the Active Employees
let activeEmployees =
    employees.filter(employee => {return employee.active === true});
console.log(activeEmployees);

// Filter senior Employees
let seniorEmployees = employees.filter(employee => {
    return employee.age >= 30;
});
console.log(seniorEmployees);
