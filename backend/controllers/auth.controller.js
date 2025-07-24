// controllers/auth.controller.js
const Usuario = require('../models/Usuario');
const jwt = require('jsonwebtoken');

const login = async (req, res) => {
  const { correo, password } = req.body;

  console.log('📩 Intento de login recibido:', { correo, password });

  try {
    const usuario = await Usuario.findOne({ correo });
    if (!usuario) {
      console.log('❌ Usuario no encontrado con ese correo');
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }

    console.log('✅ Usuario encontrado:', usuario.correo);
    console.log('🔐 Password en la DB (hash):', usuario.password);

    const esValida = await usuario.compararContraseña(password);
    console.log('🧪 Resultado comparación bcrypt:', esValida);

    if (!esValida) {
      console.log('❌ Contraseña incorrecta');
      return res.status(401).json({ error: 'Contraseña incorrecta' });
    }

    const token = jwt.sign(
      { id: usuario._id, correo: usuario.correo, rol: usuario.rol },
      process.env.JWT_SECRET,
      { expiresIn: '2h' }
    );

    console.log('🔓 Login exitoso, token generado');

    res.json({ mensaje: 'Login exitoso', token });
  } catch (error) {
    console.error('🔥 Error inesperado en login:', error);
    res.status(500).json({ error: 'Error al iniciar sesión', detalles: error.message });
  }
};

module.exports = { login };

