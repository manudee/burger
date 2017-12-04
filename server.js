// var express = require('express');
// var exphbs = require('express-handlebars');
// var bodyParser = require('body-parser');

// var app = express();
// var PORT = process.env.PORT || 8080;


// //used to serve static content such as css and images to express app
// app.use(express.static("public"));
// app.use(bodyParser.urlencoded({extended: false}));


// app.engine("handlebars", exphbs({ defaulLayout: "main"}));
// app.set("view engine","handlebars");

// var routes = require('./controllers/burgers_controller.js');

// app.use('/',routes);



// app.listen(PORT,function() {
//   console.log("Server is listening on PORT: " + PORT);
// });


var express = require("express");
var bodyParser = require("body-parser");

var port = 8080;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controller.js");

app.use("/", routes);



app.listen(port,function() {
  console.log("Server is listening on port: " + port);
});


