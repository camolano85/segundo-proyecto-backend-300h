const Usuario = require('../models/Usuario');
const jwt = require('jsonwebtoken');

const login = async (req, res) => {
    const { correo, contraseña } = req.body;

    try {
        const usuario = await Usuario.findOne({ correo });
        if (!usuario) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }

        const esValida = await usuario.compararContraseña(contraseña);
        if (!esValida) {
            return res.status(401).json({ error: 'Contraseña incorrecta' });
        }

        const token = jwt.sign(
            { id: usuario._id, correo: usuario.correo, rol: usuario.rol },
            'secreto_super_seguro', // 👈 Cámbialo por una variable de entorno
            { expiresIn: '2h' }
        );

        res.json({ mensaje: 'Login exitoso', token });
    } catch (error) {
        res.status(500).json({ error: 'Error al iniciar sesión', detalles: error.message });
    }
};

module.exports = { login };