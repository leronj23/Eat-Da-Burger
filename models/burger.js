// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {

    // Display all rows
    all: function (cb) {
        orm.all("burgers", function (res) {
            cb(res);
        });
    },

    // Add new burger
    create: function (vals, cb) {
        orm.create("burgers", ["burger_name", "devoured"], vals, function (res) {
            cb(res);
        });
    },







    // update: function (objColVals, condition, cb) {
    //     orm.update("cats", objColVals, condition, function (res) {
    //         cb(res);
    //     });
    // }
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;
