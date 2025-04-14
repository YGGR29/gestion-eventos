const Pago = require('../models/Pago');

// Obtener todos los pagos
const obtenerPagos = async () => {
    return await Pago.findAll();
};

// Crear un nuevo pago
const crearPago = async (datosPago) => {
    return await Pago.create(datosPago);
};

module.exports = { obtenerPagos, crearPago };
