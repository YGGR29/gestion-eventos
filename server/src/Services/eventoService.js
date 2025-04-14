const Evento = require('/models/Evento');

// Obtener todos los eventos
const obtenerEventos = async () => {
    return await Evento.findAll();
};

// Crear un nuevo evento
const crearEvento = async (datosEvento) => {
    return await Evento.create(datosEvento);
};

// Actualizar un evento por ID
const actualizarEvento = async (id, datosActualizados) => {
    const [actualizado] = await Evento.update(datosActualizados, { where: { id } });
    if (actualizado) {
        return await Evento.findByPk(id);
    }
    return null;
};

// Eliminar un evento por ID
const eliminarEvento = async (id) => {
    return await Evento.destroy({ where: { id } });
};

module.exports = { obtenerEventos, crearEvento, actualizarEvento, eliminarEvento };
