var friends = require('../data/friends.js');

module.exports = function(app){
    app.get('/api/friends', function(req, res){
        res.json(friends);
    })

    app.post('/api/friends', function(req, res){
        var information = req.body;
        
        console.log(information);
        
        var scores = information;

        console.log(scores);

    })
}