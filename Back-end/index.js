var express = require('express');
var bodyParser = require('body-parser');

var app = express();
const mysql = require("mysql");
require("dotenv").config();

var port = process.env.PORT || 3000;

// Convierte una petición recibida (POST-GET...) a objeto JSON
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

const conecction = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
});

conecction.connect((err) => {
    if(err) throw err;
    console.log("Connected to database");
})


app.get('/', function(req, res){
	res.status(200).send({
		message: 'GET Home route working fine!'
	});
});

app.listen(port, function(){
	console.log(`Server running in http://localhost:${port}`);
	console.log('Defined routes:');
	console.log('	[GET] http://localhost:3525/');
});