const ArchivoEvento = require('../models/ArchivoEvento');

// Obtener todos los archivos de eventos
const obtenerArchivosEvento = async () => {
    return await ArchivoEvento.findAll();
};

// Crear un nuevo archivo de evento
const crearArchivoEvento = async (datosArchivo) => {
    return await ArchivoEvento.create(datosArchivo);
};

module.exports = { obtenerArchivosEvento, crearArchivoEvento };
