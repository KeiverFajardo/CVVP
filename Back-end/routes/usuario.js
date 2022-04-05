const express = require('express');
const router = express.Router();

const mysqlConnection  = require('../database.js');

// GET all usuarios
router.get('/', (req, res) => {
  mysqlConnection.query('SELECT * FROM usuarios', (err, rows, fields) => {
    if(!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });  
});

// GET An usuario
router.get('/:id', (req, res) => {
  const { id } = req.params; 
  mysqlConnection.query('SELECT * FROM usuarios WHERE id = ?', [id], (err, rows, fields) => {
    if (!err) {
      res.json(rows[0]);
    } else {
      console.log(err);
    }
  });
});

// DELETE An usuario
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  mysqlConnection.query('DELETE FROM usuarios WHERE id = ?', [id], (err, rows, fields) => {
    if(!err) {
      res.json({status: 'Employee usuario'});
    } else {
      console.log(err);
    }
  });
});

// INSERT An usuario
router.post('/', (req, res) => {
  const {id, usuario, clave, tipo, name_client, surname_client, estado} = req.body;
  console.log(id, usuario, clave, tipo, name_client, surname_client, estado);
  const query = `
    SET @id = ?;
    SET @usuario = ?;
    SET @clave = ?;
    SET @tipo = ?;
    SET @name_client = ?;
    SET @surname_client = ?;
    SET @estado = ?;

    CALL usuarioAddOrEdit(@id, @usuario, @clave, @tipo, @name_client, @surname_client, @estado);
  `;
  mysqlConnection.query(query, [id, usuario, clave, tipo, name_client, surname_client, estado], (err, rows, fields) => {
    if(!err) {
      res.json({status: 'Usuario Saved'});
    } else {
      console.log(err);
    }
  });

});

router.put('/:id', (req, res) => {
    const {usuario, clave, tipo, name_client, surname_client, estado} = req.body;
  const { id } = req.params;
  const query = `
    SET @id = ?;
    SET @usuario = ?;
    SET @clave = ?;
    SET @tipo = ?;
    SET @name_client = ?;
    SET @surname_client = ?;
    SET @estado = ?;
    CALL usuarioAddOrEdit(@id, @usuario, @clave, @tipo, @name_client, @surname_client, @estado);
  `;
  mysqlConnection.query(query, [id, usuario, clave, tipo, name_client, surname_client, estado], (err, rows, fields) => {
    if(!err) {
      res.json({status: 'usuario Updated'});
    } else {
      console.log(err);
    }
  });
});

module.exports = router;