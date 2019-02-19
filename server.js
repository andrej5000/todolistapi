'use strict';

const express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    Task = require('./api/models/todoListModel'), // created model loading here
    bodyParser = require('body-parser');


mongoose.Promise = global.Promise;
mongoose.connect(
    'mongodb://localhost/Tododb',
    {
        useNewUrlParser: true
    }
);

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
/*app.use(function(request, response) {
    response.status(404).send({url: request.originalUrl + ' not found'});
});*/



const routes = require('./api/routes/todoListRoutes'); // importing routes
routes(app);



app.listen(port);

console.log(
    '\n-------------------------------------------------- \n' +
    '==> Todo list RESTful API server started on: ' + port +
    '\n-------------------------------------------------- \n'
);
