// Object-relational mapping for all SQL statement functions.
var burger = require("../models/burger.js");

// Routes
// =============================================================
module.exports = function (app) {

    // Get all Burgers
    // app.get("/api/all", function (req, res) {

    //     burger.all(function (data) {
    //         var hbsObject = {
    //             burgers: data
    //         };
    //         console.log(hbsObject);
    //         res.render("index", hbsObject);
    //     });



    //     // Finding all Chirps, and then returning them to the user as JSON.
    //     // Sequelize queries are asynchronous, which helps with perceived speed.
    //     // If we want something to be guaranteed to happen after the query, we'll use
    //     // the .then function
    //     //Chirp.findAll({}).then(function(results) {
    //     // results are available to us inside the .then
    //     //res.json(results);
    // });


    // Add a Burger
    app.post("/api/add", function (req, res) {

        // console.log("Chirp Data:");
        // console.log(req.body);

        // Chirp.create({
        //     author: req.body.author,
        //     body: req.body.body,
        //     created_at: req.body.created_at
        // }).then(function (results) {
        //     // `results` here would be the newly created chirp
        //     res.end();
        // });

    });

    // Devour a Burger
    app.post("/api/devour", function (req, res) {

    });
};
