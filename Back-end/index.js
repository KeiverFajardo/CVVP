var express = require('express');
var app = express();

//var bodyParser = require('body-parser');


//var port = process.env.PORT || 3000;



// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(express.json());


// Routes
app.use(require('./routes/usuario'));

//Starting server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
	//console.log('Defined routes:');
	//console.log('[GET] http://localhost:3525/');
});





const { insertUsuario, listarUsuarios} = require('./controllers/usuario');




// Convierte una petición recibida (POST-GET...) a objeto JSON
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


app.get('/', function(req, res){
	/* res.status(200).send({
		message: 'GET Home route working fine!'
	}); */
    res.send("helloo mundo");
});

app.get('/insertUsuario', function(req, res){
	/* res.status(200).send({
		message: 'GET Home route working fine!'
	}); */
    insertUsuario(connection, (result) =>{
        res.json(result);
    });

    //res.send("helloo mundo");
});

app.get('/listarUsuarios', function(req, res){
	/* res.status(200).send({
		message: 'GET Home route working fine!'
	}); */
    insertUsuario(connection, (result) =>{
        res.json(result);
    });

    //res.send("helloo mundo");
});
