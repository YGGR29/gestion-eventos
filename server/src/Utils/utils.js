const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

/**
 * Genera un hash seguro para una contraseña.
 * @param {string} password - Contraseña en texto plano.
 * @returns {Promise<string>} - Hash de la contraseña.
 */
const generarHash = async (password) => {
    const saltRounds = 10;
    return await bcrypt.hash(password, saltRounds);
};

/**
 * Compara una contraseña en texto plano con su hash.
 * @param {string} password - Contraseña en texto plano.
 * @param {string} hash - Hash almacenado en la base de datos.
 * @returns {Promise<boolean>} - Resultado de la comparación.
 */
const compararHash = async (password, hash) => {
    return await bcrypt.compare(password, hash);
};

/**
 * Genera un token JWT.
 * @param {Object} payload - Información del usuario para el token.
 * @param {string} secret - Clave secreta para firmar el token.
 * @param {string} expiresIn - Tiempo de expiración del token.
 * @returns {string} - Token generado.
 */
const generarToken = (payload, secret, expiresIn = '1h') => {
    return jwt.sign(payload, secret, { expiresIn });
};

/**
 * Verifica y decodifica un token JWT.
 * @param {string} token - Token JWT a verificar.
 * @param {string} secret - Clave secreta utilizada para firmar el token.
 * @returns {Object} - Información decodificada del token.
 * @throws {Error} - Si el token es inválido o ha expirado.
 */
const verificarToken = (token, secret) => {
    return jwt.verify(token, secret);
};

/**
 * Genera un identificador único (UUID).
 * @returns {string} - Identificador único generado.
 */
const generarUUID = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
        const r = (Math.random() * 16) | 0;
        const v = c === 'x' ? r : (r & 0x3) | 0x8;
        return v.toString(16);
    });
};

/**
 * Formatea fechas a un formato legible.
 * @param {Date|string} fecha - Fecha a formatear.
 * @returns {string} - Fecha en formato `YYYY-MM-DD HH:mm:ss`.
 */
const formatearFecha = (fecha) => {
    const date = new Date(fecha);
    return date.toISOString().replace('T', ' ').substring(0, 19);
};

module.exports = {
    generarHash,
    compararHash,
    generarToken,
    verificarToken,
    generarUUID,
    formatearFecha,
};
