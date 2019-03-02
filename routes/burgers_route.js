var burger = require("../models/burger.js");

module.exports = function (app) {

    // Load Home Page
    app.get("/", function (req, res) {

        // Get all Burgers
        burger.all(function (data) {
            var hbsObject = {
                burgers: data
            };
            console.log(hbsObject);
            res.render("index", hbsObject);
        });
    });
};