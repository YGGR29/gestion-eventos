const express = require('express');
const router = express.Router();
const archivosEventosController = require('../controllers/archivosEventosController');
const autenticarUsuario = require('back/middlewares/autenticacion');

// Subir un archivo para un evento
router.post('/', autenticarUsuario, archivosEventosController.subirArchivo);

// Obtener todos los archivos
router.get('/', autenticarUsuario, archivosEventosController.obtenerArchivos);

// Obtener un archivo por ID
router.get('/:id', autenticarUsuario, archivosEventosController.obtenerArchivoPorId);

// Eliminar un archivo
router.delete('/:id', autenticarUsuario, archivosEventosController.eliminarArchivo);

module.exports = router;
