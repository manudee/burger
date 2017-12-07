var mysql = require('mysql');

var connection;


if(process.env.JAWSDB_URL){

	connection = mysql.createConnection(process.env.JAWSDB_URL)
}
else {
	connection = mysql.createConnection({

		port: 3306,
		host: 'localhost',
		user: 'root',
		password: '123456',
		database: 'burgers_db'

	});
}

//make connection to db
connection.connect(function(err){
	if(err)
	{
		console.error("Error connecting " + err.stack);
		return;
	}

	console.log("Connected as id " + connection.threadId);
});


//export connection so it can be used in orm
module.exports = connection;