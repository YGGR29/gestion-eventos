const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const ArchivoEvento = sequelize.define('ArchivoEvento', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    evento_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    nombre_archivo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    url_archivo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    fecha_subida: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
}, {
    tableName: 'archivo_eventos',
    timestamps: false
});

module.exports = ArchivoEvento;
