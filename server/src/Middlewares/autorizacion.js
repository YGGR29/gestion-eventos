const autorizarRol = (rolesPermitidos) => {
    return (req, res, next) => {
        const { usuario } = req;

        if (!usuario || !rolesPermitidos.includes(usuario.rol)) {
            return res.status(403).json({ mensaje: 'Acceso denegado. No tiene los permisos necesarios.' });
        }

        next();
    };
};



module.exports = autorizarRol;
