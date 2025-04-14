const express = require('express');
const router = express.Router();
const pagosController = require('../controllers/pagosController');
const autenticarUsuario = require('/middlewares/autenticacion');

// Registrar un nuevo pago
router.post('/', autenticarUsuario, pagosController.crearPago);

// Obtener todos los pagos
router.get('/', autenticarUsuario, pagosController.obtenerPagos);

// Obtener un pago por ID
router.get('/:id', autenticarUsuario, pagosController.obtenerPagoPorId);

// Actualizar un pago
router.put('/:id', autenticarUsuario, pagosController.actualizarPago);

// Eliminar un pago
router.delete('/:id', autenticarUsuario, pagosController.eliminarPago);

module.exports = router;
