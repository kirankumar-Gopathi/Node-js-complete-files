// path related queries
const path = require('path');

// load the express module
const express = require('express');

// Initialize the express
let app = express();

// for text message
app.get('/',(request,response) => {
    response.send('Hello From Express JS');
});

// for html page
app.get('/about',(request,response) => {
    response.sendFile(path.join(__dirname + '/about.html'));
});

let employee = {
    name : 'John',
    age : 40,
    designation : 'Manager'
};

// for JSON Page
app.get('/json',(request,response) => {
    response.json(employee);
});

// Download a file
app.get('/download',(request,response) => {
    response.download(path.join(__dirname + '/abc.pdf'));
});


app.listen(3000);
console.log('server is started at port : 3000');

