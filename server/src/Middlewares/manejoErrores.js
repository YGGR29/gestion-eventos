const manejoErrores = (err, req, res, next) => {
    console.error(err.stack);
    res.status(err.status || 500).json({
        mensaje: err.message || 'Ocurrió un error en el servidor.',
    });
};

module.exports = manejoErrores;
