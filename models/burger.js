var orm = require('../config/orm.js');


var burger = {


	all: function(cb){
		orm.selectAll("burgers", function(res){
				cb(res);
		})
	},


	create: function(tableName,col1,col2,value1, value2, cb){

		orm.insertOne("burgers",col1,col2,value1,value2, function(res){
			cb(res);
		});

	},

	update: function(tableName,devoured, devouredVal, condition, cb){

		orm.updateOne("burgers", devoured, devouredVal, condition, function(res){

			cb(res);
		});
		


	}
}


module.exports = burger;