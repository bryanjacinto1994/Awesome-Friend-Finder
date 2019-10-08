var friends = require('../data/friends.js');

module.exports = function(app){
    app.get('/api/friends', function(req, res){
        res.json(friends);
    })

    app.post('/api/friends', function(req, res){
        var matches = {
            name: '',
            photo: '',
            matchDiff: 50
        }
        
        var information = req.body;
        
        console.log(information);
        
        var scores = information.scores;

        console.log(scores);

        var difference = 0;

        for (var i = 0; i< friends.length; i++){
            console.log(friends[i]);
            difference = 0;


            for(j = 0; j < friends[i].scores[i]; j++){
                difference += Math.abs(parseInt(scores[j]) - parseInt(friends[i].scores[j]));
                
                if(difference <= matches.matchDiff){
                    matches.name = friends[i].name;
                    matches.photo = friends[i].photo;
                    matches.matchDiff = difference;
                }
            
            }
        }
        friends.push(information);
        res.json(matches)



        //Will get back to this for the differences.
    })
}