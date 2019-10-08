//Grab the express NPM package and use 'npm install express' on the Terminal/Git Bash
var express = require('express');

//Make a variable to hold the express function to tell the node that we are creating an express server
var app = express();

//Sets an intial PORT for app listener.
var PORT = process.env.PORT || 8080;

//Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Require the js file routes.
require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);

//Listener that starts the server when executing on the nodejs.
app.listen(PORT, function(){
    console.log('Application Listening On PORT: ' + PORT);
});

