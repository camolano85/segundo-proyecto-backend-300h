const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const usuarioSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  correo: { type: String, required: true, unique: true },
  password: { type: String, required: true } // 👈 Asegúrate de usar 'password'
});

// Middleware para hashear la contraseña antes de guardar
usuarioSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next(); // Evita doble hash si ya está modificada

  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt); // Guarda como hash
    next();
  } catch (error) {
    next(error);
  }
});

// Método para comparar contraseña ingresada vs hash
usuarioSchema.methods.compararContraseña = function (passwordIngresada) {
  return bcrypt.compare(passwordIngresada, this.password);
};

module.exports = mongoose.model('Usuario', usuarioSchema);



