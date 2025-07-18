const express = require('express');
const router = express.Router();
const { crearUsuario } = require('../controllers/usuarios.controller');
const { verificarToken } = require('../middlewares/auth'); // Asegúrate de usar el archivo correcto

// Ruta pública para crear usuario
router.post('/', crearUsuario);

// Ruta protegida para obtener perfil (requiere token JWT)
router.get('/perfil', verificarToken, (req, res) => {
  res.json({
    mensaje: 'Ruta protegida accedida correctamente',
    usuario: req.usuario, // Info decodificada desde el token
  });
});

module.exports = router;