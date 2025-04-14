const Pago = require('../models/Pago');

// Obtener todos los pagos
const obtenerPagos = async (req, res) => {
    try {
        const pagos = await Pago.findAll();
        res.json(pagos);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los pagos.' });
    }
};

// Crear un nuevo pago
const crearPago = async (req, res) => {
    try {
        const pago = await Pago.create(req.body);
        res.status(201).json(pago);
    } catch (error) {
        res.status(500).json({ error: 'Error al crear el pago.' });
    }
};

module.exports = { obtenerPagos, crearPago };
