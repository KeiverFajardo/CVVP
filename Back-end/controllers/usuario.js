//const { response, request } = require('express');

const mysql = require('mysql');



function insertUsuario(connection, data, callback){
    let consulta = "INSERT INTO usuarios (USUARIO, CLAVE, TIPO, NAME_CLIENT, SURNAME_CLIENTE, ESTADO) VALUES (?, ?, ?, ?, ?)";
    let query = mysql.format(consulta, [data.usuario, data.clave, data.tipo, data.name_client, data.surname_cliente, data.estado]);
    connection.query(consulta, function(err, result){
        if(err) throw err;
        callback(result);
    });
    connection.end();
}


function listarUsuarios(connection, callback){
    connection.query('SELECT * FROM usuarios', function(err, result){
        if(err) throw err;
        callback(result);
    });
    connection.end();
}

//me retorna vacio, revisar
function usuarioGet(connection, callback, headers){
    var param = headers.usuario
    let consulta = "SELECT * FROM usuarios where usuario = ?";
    let query = mysql.format(consulta, [param]);
    connection.query(query, function(err, result){
        if(err) throw err;
        callback(result);
    });
    connection.end();
}



/* 
const Usuario = require('../models/usuario');



const usuariosGet = async(req = request, res = response) => {

    const { limite = 5, desde = 0 } = req.query;
    const query = { estado: true };

    const [ total, usuarios ] = await Promise.all([
        Usuario.countDocuments(query),
        Usuario.find(query)
            .skip( Number( desde ) )
            .limit(Number( limite ))
    ]);

    res.json({
        total,
        usuarios
    });
} */
/* 

const usuariosPost = async(req, res = response) => {
    
    const { nombre, correo, password, rol } = req.body;
    const usuario = new Usuario({ nombre, correo, password, rol });

    // Encriptar la contraseña
    const salt = bcryptjs.genSaltSync();
    usuario.password = bcryptjs.hashSync( password, salt );

    // Guardar en BD
    await usuario.save();

    res.json({
        usuario
    });
}

const usuariosPut = async(req, res = response) => {

    const { id } = req.params;
    const { _id, password, google, correo, ...resto } = req.body;

    if ( password ) {
        // Encriptar la contraseña
        const salt = bcryptjs.genSaltSync();
        resto.password = bcryptjs.hashSync( password, salt );
    }

    const usuario = await Usuario.findByIdAndUpdate( id, resto );

    res.json(usuario);
}

const usuariosPatch = (req, res = response) => {
    res.json({
        msg: 'patch API - usuariosPatch'
    });
}

const usuariosDelete = async(req, res = response) => {

    const { id } = req.params;

    // Fisicamente lo borramos
    // const usuario = await Usuario.findByIdAndDelete( id );

    const usuario = await Usuario.findByIdAndUpdate( id, { estado: false } );


    res.json(usuario);
} */

module.exports = {
    insertUsuario,
    listarUsuarios,
    usuarioGet,
    /*usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete, */
}