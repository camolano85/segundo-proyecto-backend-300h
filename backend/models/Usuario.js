// models/Usuario.js
const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    correo: {
        type: String,
        required: true,
        unique: true
    },
    contraseña: {
        type: String,
        required: true
    },
    rol: {
        type: String,
        enum: ['admin', 'usuario'],
        default: 'usuario'
    }
}, { timestamps: true });

module.exports = mongoose.model('Usuario', usuarioSchema);