const express = require('express');
const router = express.Router();
const eventosController = require('../controllers/eventosController');
const autenticarUsuario = require('/middlewares/autenticacion');

// Crear un evento
router.post('/', autenticarUsuario, eventosController.crearEvento);

// Obtener todos los eventos
router.get('/', eventosController.obtenerEventos);

// Obtener un evento por ID
router.get('/:id', eventosController.obtenerEventoPorId);

// Actualizar un evento
router.put('/:id', autenticarUsuario, eventosController.actualizarEvento);

// Eliminar un evento
router.delete('/:id', autenticarUsuario, eventosController.eliminarEvento);

module.exports = router;
