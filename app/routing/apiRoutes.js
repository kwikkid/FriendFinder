var path = require("path");

var friendsData = require("../data/friends.js");

module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        res.json(friendsData);
    });

    app.post("/api/friends", function(req, res) {
        // console.log(req);
        var currentUser = req.body;
        currentUser.routeName = currentUser.name
            .replace(/\s+/g, "")
            .toLowerCase();
        console.log(currentUser);
        var list = [];

        for (var n = 0; n < friendsData.length; n++) {
        	
        	var differences = [];
            var eachFriend = friendsData[n];
            var sum = 0;
            // compare scores
            for (var x = 0; x < eachFriend.scores.length; x++) {
            	
                var eachFriendScore = eachFriend.scores[x];
                var userScore = currentUser.scores[x]
                //difference between each element of animal vs user score//
                var eachDifference = Math.abs(userScore - eachFriendScore);
                //taking that difference and pushing it into an array//
                differences.push(eachDifference)
            	var sumOfDifferences = sum += (differences[x]);

            };
            
            // console.log("the sum: " + sumOfDifferences)

            list.push(sumOfDifferences)
  		
        };
		var low = list[0];
			var indexOfLow;
			for (var i = 0; i < list.length; i++) {
				if(list[i] < low) {
					low = list[i];
				indexOfLow = i;
				}			
			}

		var bestMatch = friendsData[indexOfLow];
		console.log(bestMatch)
		res.json(bestMatch)


    });
    // function findMatch(list) {
    	





};


// friendsData.push(currentUser);
