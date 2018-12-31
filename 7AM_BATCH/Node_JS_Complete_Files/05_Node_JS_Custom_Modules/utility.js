// Load the fs module
const fs = require('fs');

// ReverseStr
let reverseStr = (str) => {
    let tempStr = '';
    for(let i=str.length-1; i>=0;i--){
        tempStr += str.charAt(i);
    }
    return tempStr;
};

// Palindrome String
let convertToPalindrome = (str) => {
    let tempStr = str;
    for(let i=str.length-2; i>=0; i--){
        tempStr += str.charAt(i);
    }
    return tempStr;
};

// Save to File
let saveToFile = (fileName,message) => {
    fs.appendFile(fileName,message,(err) => {
        if(err) throw err;
        console.log('saved to file');
    });
};

// Export these functions
module.exports = {
  reverseStr,
  convertToPalindrome,
  saveToFile
};