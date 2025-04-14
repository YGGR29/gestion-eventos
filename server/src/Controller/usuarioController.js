import Usuario from "../Models/Usuario.js";

//Obtener usuarios por id
export const obtenerPorId = async (req, res) => {
    try {
      const { cedula } = req.params; // Obtener la id
      const usuario = await Usuario.findAll({
        where: {
            cedula: cedula,
        },
      });
  
      res.status(200).json({
        error: false,
        usuario,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        error: true,
        msg: "Error al obtener el usuario",
      });
    }
  };

  export const existeCedula = async (req, res) => {
    try {
      const { cedula } = req.params;
      const existeCedula = await Usuario.findOne({ where: { cedula } });
      if (existeCedula) {
        return res.status(400).json({
          error: true,
          msg: "Usuario existente",
        });
      }
      res.status(200).json({
        error: false,
        msg: "Usuario no existente",
      });
    } catch (error) {
      res.status(500).json({
        error: true,
        msg: "Error al obtener el usuario",
      });
    }
  };
  
// Obtener todos los usuarios
export const obtenerUsuarios = async (req, res) => {
    try {
      const usuarios = await Usuario.findAll(); // Obtener todos los usuarios
  
      res.status(200).json({
        error: false,
        usuarios,
      });
    } catch (error) {
      res.status(500).json({
        error: true,
        msg: "Error al obtener usuarios",
      });
    }
  };

// Crear un nuevo usuario
export const crearUsuario = async (req, res) => {
    try {
      const {
        cedula,
        nombre,
        apellido,
        email,
        contraseña,
        telefono,
        contrasena,
        fecha_registro,
        rol,
        estado,
      } = req.body;
      //verificar si existe el email
      const existeCedula = await Usuario.findOne({ where: { cedula } });
      if (existeCedula) {
        return res.status(400).json({
          error: true,
          msg: "Usuario existente",
        });
      }
      //registrar usuario
      const nuevoUsuario = await Usuario.create({
        cedula,
        nombre,
        apellido,
        email,
        contraseña,
        telefono,
        contrasena,
        fecha_registro,
        rol,
        estado,
      });
      res.status(201).json({
        error: false,
        nuevoUsuario: nuevoUsuario.nombre,
        msg: "Su cuenta ha sido creada",
      });
    } catch {
      res.status(500).json({
        msg: "No se puedo registrar el usuario",
        error,
      });
    }
  };

// Actualizar un usuario por ID
export const actualizarUsuario = async (req, res) => {
    try {
      const { cedula } = req.params; // Obtener el ID del usuario a actualizar
      const {
        nombre,
        apellido,
        email,
        contraseña,
        telefono,
        contrasena,
        fecha_registro,
        rol,
        estado,
      } = req.body; // Obtener los datos a actualizar
  
      // Verificar que el usuario exista
      const usuario = await Usuario.findByPk(cedula);
      if (!usuario) {
        return res.status(404).json({
          error: true,
          msg: "Usuario no encontrado",
        });
      }
  
      // Actualizar el usuario
      await usuario.update({
        nombre,
        apellido,
        email,
        contraseña,
        telefono,
        contrasena,
        fecha_registro,
        rol,
        estado,
      });
  
      res.status(200).json({
        error: false,
        msg: "Usuario actualizado exitosamente",
      });
    } catch (error) {
      res.status(500).json({
        error: true,
        msg: "Error al actualizar usuario",
      });
    }
  };

// Eliminar un usuario por ID
export const eliminarUsuario = async (req, res) => {
    try {
      const { cedula } = req.params;
  
      // Verificar que exista el usuario
      const usuario = await Usuario.findByPk(cedula);
      if (!usuario) {
        return res.status(404).json({
          error: true,
          msg: "Usuario no encontrado",
        });
      }
  
      await usuario.destroy(); // Eliminar el usuario
  
      res.status(200).json({
        error: false,
        msg: "Usuario eliminado exitosamente",
      });
    } catch (error) {
      res.status(500).json({
        error: true,
        msg: "Error al eliminar usuario",
      });
    }
  };


export const existeEmail = async (req, res) => {
    try {
      const { email } = req.params;
      const existeEmail = await Usuario.findOne({ where: { email } });
      if (existeEmail) {
        return res.status(400).json({
          error: true,
          msg: "Email existente",
        });
      }
      res.status(200).json({
        error: false,
        msg: "Email no existente",
      });
    } catch (error) {
      res.status(500).json({
        error: true,
        msg: "Error al obtener el email",
      });
    }
  };
