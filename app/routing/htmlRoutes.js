var path = require("path");

module.exports = function(app) {
	app.get("/", function(req, res) {
		res.sendFile(path.join(__dirname + "/../public/home.html"));
	});
	app.get("/survey", function(req, res) {
		res.sendFile(path.join(__dirname + "/../public/survey.html"));
	});
	app.use(function(req, res) {
		res.sendFile(path.join(__dirname + "/../public/home.html"));
	});
};
// Have a GET route to /survey which will display the survey page
// Add a catch-all route that leads to `home.html` and displays the home page
