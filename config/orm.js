var connection = require('./connection.js');



var orm = {


	selectAll: function(tableName,cb){
		var selectQuery = `select * from ${tableName}`;

		connection.query(selectQuery, function(err,result){
			if(err)
				{
					throw err;
				}

				cb(result);

		})

	},


	insertOne: function(tableName, col1,col2,value1, value2, cb){

		var insertQuery = `insert into ${tableName} (${col1}, ${col2}) values ('${value1}','${value2}')`;

		connection.query(insertQuery, function(err, result){
			if(err){
				throw err;
			}

			cb(result);
		})

	},

	updateOne: function(tableName, devoured, devouredVal, condition, cb){

		var updateQuery = `update ${tableName} set ${devoured} = ${devouredVal} where ${condition}`;

		connection.query(updateQuery, function(err, result){

			if(err){
				throw err;
			}

			cb(result);
		})

	}
}


module.exports = orm;


