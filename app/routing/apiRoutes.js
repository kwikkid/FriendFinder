var path = require("path");

var friendsData = require("../data/friends.js");

module.exports = function(app) {
	app.get("/api/friends", function(req, res) {
		res.json(friendsData);
	});

	app.post("/api/friends", function(req, res) {
		var currentUser = req.body;
		currentUser.routeName = currentUser.name
			.replace(/\s+/g, "")
			.toLowerCase();
		console.log(currentUser);

		for (var i = 0; i < currentUser.scores.length; i++) {
			var userScore = currentUser.scores[i];
			console.log("user score " + userScore);
		}
		//need to add a way to check each element of the scores array for each element in the friendsData array//
		//store each element in array as a variable and compare with userScore.
		//store the total difference between each friend in a variable.
		//return the best match

		for (var i = 0; i < friendsData.length; i++) {
			var dbScore = friendsData[i].scores[i];
			console.log("dbScore" + dbScore);
			// 	console.log("dbScore: " + dbSCore)
			// 	// var difference = userScore - dbScore;
			// 	// console.log(difference);
			// }

			// friendsData.push(currentUser);

			// var bestMatch ={
			// 	name: "",
			// 	image: "",
			// 	scores:
		}
	});
};
//create two routes//
// GET route with the url "/ api/friends"  and POST route with "/api/friends"