
//Require the information in friends array from friends.js
var friends = require('../data/friends.js');


//Routing
module.exports = function(app){

    //These codes are JSON data when navigated to http://localhost:8080/api/friends    
    app.get('/api/friends', function(req, res){
        res.json(friends);
    })
    
    /*
    This post the calculated scores of the user's survey 
    and compares it to the friends array survey to get a match.
    */
    app.post('/api/friends', function(req, res){
        //Make a variable to hold empty string values for name of photo.
        var matches = {
            name: '',
            photo: '',
            matchDiff: 50
        }
        
        //Make a variable to hold red.body(body parsing middleware)
        var information = req.body;
        
        console.log(information);
        
        //Make a variable to hold the req.body with the scores.
        var scores = information.scores;

        console.log(scores);

        //Make a variable to calculate the difference and set its value to 0.
        var difference = 0;

        //Make a for-loop to iterate through the friends array.
        for (var i = 0; i< friends.length; i++){
            console.log(friends[i]);
            difference = 0;

        //Make a nested-for-loop to make a comparison difference using "Math.abs" to return the absolute value of a number.
            for(j = 0; j < friends[i].scores[i]; j++){
                difference += Math.abs(parseInt(scores[j]) - parseInt(friends[i].scores[j]));
                
        //If statement to show if difference is less then or equal to the matchDifferences, it will
        //compare the users survey with the friends array and match.      
                if(difference <= matches.matchDiff){
                    matches.name = friends[i].name;
                    matches.photo = friends[i].photo;
                    matches.matchDiff = difference;
                }
            
            }
        }

        //The results are pushed onto req.body
        friends.push(information);

        //Sends a JSON response of the users survey
        res.json(matches)

    })
}