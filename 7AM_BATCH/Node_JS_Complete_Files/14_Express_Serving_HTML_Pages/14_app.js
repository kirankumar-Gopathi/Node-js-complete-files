const express = require('express');
const path  = require('path');
const router = require('./router/routes');

// initialize the express
let app = express();

// Use the public folder as static
app.use('/public',express.static('public'));

// call the mapRoutes function
router.mapRoutes(app);

app.listen(3000);
console.log('Server is started at http://127.0.0.1:3000');