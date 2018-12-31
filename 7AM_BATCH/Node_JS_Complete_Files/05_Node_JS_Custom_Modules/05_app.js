// Load the custom / user defined module
let utility = require('./utility');

let theStr = 'Good Morning';
let revStr = utility.reverseStr(theStr);
utility.saveToFile('rev.txt',revStr);

let palindromeStr = utility.convertToPalindrome(theStr);
utility.saveToFile('palindrome.txt',palindromeStr);

