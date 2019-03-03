// Server.js - This file is the initial starting point for the Node/Express server.

// Dependencies
// =============================================================
var express = require('express');

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
// =============================================================
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Sets up handlebars
// =============================================================
var exphbs = require('express-handlebars');
//app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
var hbs = exphbs.create({});
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Static directory to be served
// =============================================================
app.use(express.static('public'));

// Controller
// =============================================================
require("./controllers/burgers_controller.js")(app);
require("./routes/burgers_route.js")(app);

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
