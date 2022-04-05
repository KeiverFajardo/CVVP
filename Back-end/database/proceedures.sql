USE cvvp;

DELIMITER $$
USE `cvvp`$$

CREATE PROCEDURE `usuarioAddOrEdit` (
  IN usuario_id INT,
  IN usuario VARCHAR(100),
  IN clave varchar(100),
  IN tipo INT,
  name_client varchar(50),
  surname_client varchar(50),
  estado int
)
BEGIN 
  IF usuario_id = 0 THEN
    INSERT INTO usuarios (USUARIO_ID, USUARIO, CLAVE, TIPO, NAME_CLIENT, SURNAME_CLIENTE, ESTADO)
    VALUES (usuario_id, usuario, clave, tipo, name_client, surname_client, estado);

    SET usuario_id = LAST_INSERT_ID();
  ELSE
    UPDATE usuarios
    SET
    USUARIO = usuario,
    CLAVE = clave,
    TIPO = tipo,
    NAME_CLIENT = name_client,
    SURNAME_CLIENTE = surname_client,
    ESTADO = estado
    WHERE USUARIO_ID = usuario_id;
  END IF;

  SELECT usuario_id AS 'id';
END
