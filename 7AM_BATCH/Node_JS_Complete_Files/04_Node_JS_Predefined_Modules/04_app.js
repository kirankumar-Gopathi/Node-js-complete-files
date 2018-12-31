// Load Predefined Module
const fs = require('fs');
const os = require('os');

// Append Data to a file
fs.appendFile('write.txt','Good Morning',function(err) {
    if(!err){
        console.log('Added Successfully');
    }
});

// Example 1
let message = 'Good Morning';
let fileName = 'file1.txt';
fs.appendFile(fileName,message,(err) => {
    if(!err){
        console.log(`Added to ${fileName}`);
    }
});

// Example 2
let wishMe = (time,name) => {
    let message = '';
    if(time <= 12){
        message = `Good Morning ${name}`;
    }
    else if(time >12 && time <= 17){
        message = `Good Afternoon ${name}`;
    }
    else if(time >17 && time <= 23){
        message = `Good Evening ${name}`;
    }
    else{
        message = `Enter Proper Time ${name}`;
    }
    return message + '\n';
};

let getFileName = (name) => {
    return `${name}.txt`;
};

let getUserName = () => {
    return os.userInfo().username;
};

fs.appendFile(getFileName('file2'),wishMe(25,getUserName()),(err) => {
    if(!err){
        console.log(`Added to the file`);
    }
});







