const path = require('path');

// create user defined function for routes
module.exports.mapRoutes = (app) => {

    app.get('/',(request,response) => {
        response.sendFile(path.join(__dirname , '../views' , 'index.html'));
    });

    app.get('/about',(request,response) => {
        response.sendFile(path.join(__dirname , '../views' , 'about.html'));
    });

    app.get('/contact',(request,response) => {
        console.log(request.query);
        response.sendFile(path.join(__dirname , '../views' , 'contact.html'));
    });

    app.get('/careers',(request,response) => {
        response.sendFile(path.join(__dirname , '../views' , 'careers.html'));
    });

    app.get('/services',(request,response) => {
        response.sendFile(path.join(__dirname , '../views' , 'services.html'));
    });
};