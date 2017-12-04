var express = require('express');
var router = express.Router();

var burger = require('../models/burger.js');



router.get('/', function(req,res){
	

	burger.all(function(data){
		var burgerObj = {
			burgers: data

	};

	console.log(data);

})
	res.render("index");
	// res.send("hey There");

});



router.post("/api/burgers", function(req, res) {


console.log(req.body);
  burger.create("burgers","burger_name","devoured", req.body.burger_name, req.body.devoured, function(result) {
    // Send back the ID of the new quote
    // console.log(req.body);
    console.log(req.body);
    console.log("I posted");
    console.log(result);
    res.json({ id: result.insertId });
  });
});





router.put("/api/burgers/:id", function(req,res){

 var condition = "id = " + req.params.id;

	console.log(condition);
	console.log(typeof(condition));

	burger.update("burgers", "devoured", req.body.devoured, condition, function(result){
		console.log(result);
		console.log(req.body.devoured);
		res.json({affectedRows: result.affectedRows});
	})

})








module.exports = router;