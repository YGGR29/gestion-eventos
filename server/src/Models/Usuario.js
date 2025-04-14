import Sequelize from 'sequelize';
import sequelize from "../database/db.js";

const Usuario = sequelize.define('usuarios', {
    user_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
    },
    cedula: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    nombre: {
        type: Sequelize.STRING,
        allowNull: false
    },
    apellido: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
    },
    contraseña: {
        type: Sequelize.STRING,
        allowNull: false
    },
    telefono: {
        type: Sequelize.STRING,
        allowNull: true
    },
    fecha_registro: {
        type: Sequelize.DATEONLY,
        allowNull: false,
    },
    rol: {
        type: Sequelize.ENUM('administrador', 'asistente', 'organizador'),
        allowNull: false
    },
    estado: {
        type: Sequelize.ENUM('activo', 'inactivo'),
        defaultValue: 'activo'
    }
}, {
    tableName: 'usuarios',
    timestamps: false
});

export default Usuario;