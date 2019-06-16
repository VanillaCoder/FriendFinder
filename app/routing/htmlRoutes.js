//Dependencies
var path = require("path");

//export all routes as a function
module.exports = function (app) {

    //routes
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

    app.get("/survey", function (req, res) {
        console.log("is this working?")
        res.sendFile(path.join(__dirname, "../public/survey.html"));

    })

}