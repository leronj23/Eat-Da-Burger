var burger = require("../models/burger.js");

module.exports = function (app) {

    // Load Home Page
    app.get("/", function (req, res) {

        // Get all Burgers
        burger.selectAll(function (data) {

            var burger = [];
            var devourBurger = [];
            for(var i=0; i < data.length; i++){

                // Seperate the burgers and devouredBurgers
                if (data[i].devoured == 0){
                    burger.push(data[i]);
                }
                else{
                    devourBurger.push(data[i]);
                }
            }

            // Add both arrays to the hbsObject
            var hbsObject = {
                burgers: burger,
                devouredBurgers: devourBurger
            };
            res.render("main", hbsObject);
        });
    });
};