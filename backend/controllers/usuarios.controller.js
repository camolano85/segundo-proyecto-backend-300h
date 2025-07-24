// controllers/usuarios.controller.js
const Usuario = require('../models/Usuario');
const bcrypt = require('bcryptjs'); // ✅ Asegúrate de tenerlo instalado: npm install bcryptjs

const crearUsuario = async (req, res) => {
  console.log('📦 Datos recibidos en /usuarios:', req.body);

  const { nombre, correo, password } = req.body;

  if (!nombre || !correo || !password) {
    return res.status(400).json({ mensaje: 'Todos los campos son obligatorios' });
  }

  try {
    const usuarioExistente = await Usuario.findOne({ correo });
    if (usuarioExistente) {
      return res.status(400).json({ mensaje: 'El correo ya está registrado' });
    }

    // ✅ Hashear la contraseña antes de guardar
    const hashedPassword = await bcrypt.hash(password, 10);

    const nuevoUsuario = new Usuario({
      nombre,
      correo,
      password: hashedPassword
    });

    await nuevoUsuario.save();

    res.status(201).json({ mensaje: 'Usuario creado correctamente' });
  } catch (error) {
    console.error('❌ Error al crear usuario:', error);
    res.status(500).json({ mensaje: 'Error interno del servidor' });
  }
};

module.exports = { crearUsuario };


