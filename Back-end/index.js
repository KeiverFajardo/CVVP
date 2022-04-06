var express = require('express');
var app = express();

//const router = express.Router();
//var bodyParser = require('body-parser');


var port = process.env.PORT || 3000;

//const mysqlConnection  = require('./database/database.js');

// Settings
//app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(express.json());


// Routes
app.use(require('./routes/usuario'));

//Starting server
app.listen(port, () => {
    console.log(`Server on port ${port}`);
	//console.log('Defined routes:');
	//console.log('[GET] http://localhost:3525/');
});





//const { insertUsuario, listarUsuarios} = require('./controllers/usuario');




// Convierte una petición recibida (POST-GET...) a objeto JSON
/* app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json()); */


//router.get('/', function(req, res){
	/* res.status(200).send({
		message: 'GET Home route working fine!'
	}); */
 //   res.send("helloo mundo");
//});

//app.get('/insertUsuario', function(req, res){
	/* res.status(200).send({
		message: 'GET Home route working fine!'
	}); */
 //   insertUsuario(mysqlConnection, (result) =>{
 //       res.json(result);
 //   });

    //res.send("helloo mundo");
//});

//router.get('/listarUsuarios', function(req, res){
	/* res.status(200).send({
		message: 'GET Home route working fine!'
	}); */
   // listarUsuarios(mysqlConnection, (result) =>{
   //     res.json(result);
   // });

    //res.send("helloo mundo");
//});
