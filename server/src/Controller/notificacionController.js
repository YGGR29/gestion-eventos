const Notificacion = require('../models/Notificacion');

// Obtener todas las notificaciones
const obtenerNotificaciones = async (req, res) => {
    try {
        const notificaciones = await Notificacion.findAll();
        res.json(notificaciones);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener las notificaciones.' });
    }
};

// Crear una nueva notificación
const crearNotificacion = async (req, res) => {
    try {
        const notificacion = await Notificacion.create(req.body);
        res.status(201).json(notificacion);
    } catch (error) {
        res.status(500).json({ error: 'Error al crear la notificación.' });
    }
};

module.exports = { obtenerNotificaciones, crearNotificacion };
