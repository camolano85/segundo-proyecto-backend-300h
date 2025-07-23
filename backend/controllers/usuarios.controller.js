const bcrypt = require('bcrypt');
const Usuario = require('../models/Usuario');

const crearUsuario = async (req, res) => {
  try {
    const { nombre, correo, contraseña, rol } = req.body;

    
    const usuarioExistente = await Usuario.findOne({ correo });
    if (usuarioExistente) {
      return res.status(400).json({ mensaje: 'El correo ya está registrado' });
    }

   
    const salt = await bcrypt.genSalt(10);
    const contraseñaHasheada = await bcrypt.hash(contraseña, salt);

    
    const nuevoUsuario = new Usuario({
      nombre,
      correo,
      contraseña: contraseñaHasheada,
      rol
    });

    const usuarioGuardado = await nuevoUsuario.save();
    res.status(201).json(usuarioGuardado);
  } catch (error) {
    res.status(400).json({ error: 'Error al crear usuario', detalles: error.message });
  }
};

module.exports = { crearUsuario };
