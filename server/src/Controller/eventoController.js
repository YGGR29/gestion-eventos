const Evento = require('/models/Evento');

// Obtener todos los eventos
const obtenerEventos = async (req, res) => {
    try {
        const eventos = await Evento.findAll();
        res.json(eventos);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los eventos.' });
    }
};

// Crear un nuevo evento
const crearEvento = async (req, res) => {
    try {
        const evento = await Evento.create(req.body);
        res.status(201).json(evento);
    } catch (error) {
        res.status(500).json({ error: 'Error al crear el evento.' });
    }
};

// Actualizar un evento por ID
const actualizarEvento = async (req, res) => {
    try {
        const { id } = req.params;
        const [actualizado] = await Evento.update(req.body, { where: { id } });
        if (actualizado) {
            const eventoActualizado = await Evento.findByPk(id);
            res.json(eventoActualizado);
        } else {
            res.status(404).json({ error: 'Evento no encontrado.' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar el evento.' });
    }
};

// Eliminar un evento por ID
const eliminarEvento = async (req, res) => {
    try {
        const { id } = req.params;
        const eliminado = await Evento.destroy({ where: { id } });
        if (eliminado) {
            res.json({ mensaje: 'Evento eliminado correctamente.' });
        } else {
            res.status(404).json({ error: 'Evento no encontrado.' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar el evento.' });
    }
};

module.exports = { obtenerEventos, crearEvento, actualizarEvento, eliminarEvento };
