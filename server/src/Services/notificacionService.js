const Notificacion = require('../models/Notificacion');

// Obtener todas las notificaciones
const obtenerNotificaciones = async () => {
    return await Notificacion.findAll();
};

// Crear una nueva notificación
const crearNotificacion = async (datosNotificacion) => {
    return await Notificacion.create(datosNotificacion);
};

module.exports = { obtenerNotificaciones, crearNotificacion };
