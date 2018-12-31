const fs = require('fs');

// create an object
let employee = {
    name : 'John',
    age : 40,
    designation : 'Manager',
    company : 'Infosys'
};

// create a file and write to a file
fs.writeFile('write.json',JSON.stringify(employee),(err) => {
    if(err) throw err;
    console.log('added to the file');
});

// Read the data from the file
fs.readFile('write.json',(err,data) => {
    if(err) throw err;
    // Write to file
    let newData = JSON.stringify(JSON.parse(data));
    fs.writeFile('read.json',newData,(err)=>{
        if(err) throw err;
        console.log('added to the new file');
    });
});