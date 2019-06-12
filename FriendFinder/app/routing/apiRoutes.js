var path = require("path");

var friendsData = require("../data/friends.js");

module.exports = function(app) {
	app.get("/api/friends", function(req, res) {
		res.json(friensData);
	});

	// app.post("/api/friends", function(req, res){

	// })
};
//create two routes//
// GET route with the url "/ api/friends"  and POST route with "/api/friends"
