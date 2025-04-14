const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Evento = sequelize.define('Evento', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    titulo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    descripcion: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    fecha_inicio: {
        type: DataTypes.DATE,
        allowNull: false
    },
    fecha_fin: {
        type: DataTypes.DATE,
        allowNull: false
    },
    ubicacion: {
        type: DataTypes.STRING,
        allowNull: true
    },
    estado: {
        type: DataTypes.ENUM('pendiente', 'en progreso', 'completado', 'cancelado'),
        defaultValue: 'pendiente'
    },
    organizador_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    tableName: 'eventos',
    timestamps: false
});

module.exports = Evento;
