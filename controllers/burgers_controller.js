// Object-relational mapping for all SQL statement functions.
var burger = require("../models/burger.js");

// Routes
// =============================================================
module.exports = function (app) {

    // Add a Burger
    app.post("/api/add", function (req, res) {

        vals = req.body.burger;
        console.log('req.body.vals', vals);

        // Get all Burgers
        burger.insertOne(vals, function (data) {
            console.log("data", data);
            res.json({ id: data.insertId });
        });
    });


    // Devour a Burger
    app.post("/api/devour", function (req, res) {

        var condition = "id = " + req.body.id;
        console.log('condition', condition);

        // Update Burger
        burger.updateOne({
            devoured: true
        },
            condition, function (data) {
                console.log("data", data);
                res.json({ id: data.insertId });
            });
    });
};
