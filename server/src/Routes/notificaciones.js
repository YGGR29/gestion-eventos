const express = require('express');
const router = express.Router();
const notificacionesController = require('../controllers/notificacionesController');
const autenticarUsuario = require('/middlewares/autenticacion');

// Crear una notificación
router.post('/', autenticarUsuario, notificacionesController.crearNotificacion);

// Obtener todas las notificaciones
router.get('/', autenticarUsuario, notificacionesController.obtenerNotificaciones);

// Obtener una notificación por ID
router.get('/:id', autenticarUsuario, notificacionesController.obtenerNotificacionPorId);

// Actualizar una notificación
router.put('/:id', autenticarUsuario, notificacionesController.actualizarNotificacion);

// Eliminar una notificación
router.delete('/:id', autenticarUsuario, notificacionesController.eliminarNotificacion);

module.exports = router;
