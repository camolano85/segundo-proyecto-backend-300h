
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const usuarioSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    correo: { type: String, required: true, unique: true },
    contraseña: { type: String, required: true },
    rol: { type: String, enum: ['admin', 'usuario'], default: 'usuario' }
}, { timestamps: true });


usuarioSchema.pre('save', async function (next) {
    if (!this.isModified('contraseña')) return next();
    const salt = await bcrypt.genSalt(10);
    this.contraseña = await bcrypt.hash(this.contraseña, salt);
    next();
});


usuarioSchema.methods.compararContraseña = function (contraseñaIngresada) {
    return bcrypt.compare(contraseñaIngresada, this.contraseña);
};

module.exports = mongoose.model('Usuario', usuarioSchema);
