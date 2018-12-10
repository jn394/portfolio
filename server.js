// Requiring necessary npm packages
var express = require("express");

// Setting up port and requiring models for syncing
var PORT = process.env.PORT || 8080;

// Creating express app and configuring middleware needed for authentication
var app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// Requiring our routes
require("./routes/api-routes.js")(app);

// Start the server
app.listen(PORT, function () {
    console.log("App running on port " + PORT + "!");
});
