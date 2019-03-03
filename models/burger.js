// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {

    // Display all rows
    selectAll: function (cb) {
        orm.selectAll("burgers", function (res) {
            cb(res);
        });
    },

    // Add new burger
    insertOne: function (vals, cb) {
        console.log('vals', vals);
        orm.insertOne("burgers", ["burger_name"], vals, function (res) {
            cb(res);
        });
    },

    // Add new burger
    updateOne: function (objColVals, condition, cb) {
        console.log('condition', objColVals, condition);

        orm.updateOne("burgers", objColVals, condition, function (res) {
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
