var friends = require("../data/friends.js")

module.exports = function(app){

    app.get("/api/friends", function(req,res){
        res.json(friends);
    })

    app.post("/api/friends", function(req,res){
        friends.push(req.body);
    })

}

//I ran out of time for this assignment so its missing some basic functionality. I would probably code in a route to match someone with their
//best friend here but for right now everyone gets matched with Jared. Which works for him I guess.