
var friends = require("../data/friends");

module.exports = function (app) {


    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function (req, res) {
        let userScores = req.body; //answers from user
        let minDif = 9999999;
        let matchedFriend;
        for (let i = 0; i < friends.length; i++) {
            let totDif = 0;
            for (let j = 0; j < friends[i].scores.length; j++) {
                totDif += Math.abs(friends[i].scores[j] - userScores[j]);
            }
            if (totDif <= minDif) {
                matchedFriend = friends[i];
            }
        }

        console.log(matchedFriend);
        res.json(matchedFriend);



    });

}
