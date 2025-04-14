const jwt = require('jsonwebtoken');

const autenticarUsuario = (req, res, next) => {
    const token = req.headers['authorization'];

    if (!token) {
        return res.status(401).json({ mensaje: 'Acceso denegado. Token no proporcionado.' });
    }

    try {
        const tokenSinBearer = token.replace('Bearer ', '');
        const decoded = jwt.verify(tokenSinBearer, process.env.JWT_SECRET);
        req.usuario = decoded;
        next();
    } catch (error) {
        res.status(401).json({ mensaje: 'Token no válido.' });
    }
};

module.exports = autenticarUsuario;
