var express = require('express');
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');

var app = express();
var PORT = process.env.PORT || 8080;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: false}));
// app.use('/img', express.static(__dirname + '/public/assets'));


app.engine("handlebars", exphbs({ defaulLayout: "main"}));
app.set("view engine","handlebars");

var routes = require('./controllers/burgers_controller.js');

app.use('/',routes);
// app.use(app.router);
// routes.initialize(app);


app.listen(PORT,function() {
  console.log("Server is listening on PORT: " + PORT);
});


