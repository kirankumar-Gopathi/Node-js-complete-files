const yargs = require('yargs');
const fs = require('fs');

let command = yargs.argv._[0];
let arguments = yargs.argv;

let student = {
    name : arguments.name,
    age : arguments.age,
    course : arguments.course
};

console.log(student);

if(command === 'write'){
    fs.writeFile('write.json',JSON.stringify(student),(err)=>{
        if(err) throw err;
        console.log('Data is added to a file');
    });
}
else{
    console.log('Command not found');
}