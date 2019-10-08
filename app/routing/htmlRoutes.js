//Grab the path NPM Package by using require and then do 'npm install --save path' on the Terminal/Git Bash
var path = require('path');

module.exports = function(app){

    //Makes a route name for the surver.html page
    app.get('/survey', function(req,res){
        res.sendFile(path.join(__dirname, '../public/survey.html'));

    });

    //The '*' sign sets the home.html as the default page AKA (Starting) HomePage.
    app.get('*', function(req, res){
        res.sendFile(path.join(__dirname, '../public/home.html'));
    });

    
}