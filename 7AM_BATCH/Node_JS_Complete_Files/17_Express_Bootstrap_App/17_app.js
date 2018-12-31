const express = require('express');
const routes = require('./router/routes');

let app = express();

// Use the public folder as static
app.use('/public',express.static('public'));

// map the request urls
routes.mapRoutes(app);

app.listen(3000);
console.log('server is started at http://127.0.0.1:3000');
