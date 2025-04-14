const Usuario = require('/models/Usuario');

// Obtener todos los usuarios
const obtenerUsuarios = async () => {
    return await Usuario.findAll();
};

// Crear un nuevo usuario
const crearUsuario = async (datosUsuario) => {
    return await Usuario.create(datosUsuario);
};

// Actualizar un usuario por ID
const actualizarUsuario = async (id, datosActualizados) => {
    const [actualizado] = await Usuario.update(datosActualizados, { where: { id } });
    if (actualizado) {
        return await Usuario.findByPk(id);
    }
    return null;
};

// Eliminar un usuario por ID
const eliminarUsuario = async (id) => {
    return await Usuario.destroy({ where: { id } });
};

module.exports = { obtenerUsuarios, crearUsuario, actualizarUsuario, eliminarUsuario };
