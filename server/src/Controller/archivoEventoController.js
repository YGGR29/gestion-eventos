const ArchivoEvento = require('../models/ArchivoEvento');

// Obtener todos los archivos de eventos
const obtenerArchivosEvento = async (req, res) => {
    try {
        const archivos = await ArchivoEvento.findAll();
        res.json(archivos);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los archivos de eventos.' });
    }
};

// Crear un nuevo archivo de evento
const crearArchivoEvento = async (req, res) => {
    try {
        const archivoEvento = await ArchivoEvento.create(req.body);
        res.status(201).json(archivoEvento);
    } catch (error) {
        res.status(500).json({ error: 'Error al crear el archivo de evento.' });
    }
};

module.exports = { obtenerArchivosEvento, crearArchivoEvento };
