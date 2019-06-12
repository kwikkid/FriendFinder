var express = require("express");
var path = require("path");

var app = express();
var PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ROUTER
// Pointing our server to a series of "route" files

require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);
// app.get("/", function(req, res) {
// 	res.send("Friend Finder");
// });

app.listen(PORT, function() {
	console.log("App listening on PORT " + PORT);
});
