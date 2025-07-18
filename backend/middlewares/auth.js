const jwt = require('jsonwebtoken');

const verificarToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Token no proporcionado o mal formado' });
  }

  const token = authHeader.split(' ')[1];

  console.log('🔐 Token recibido:', token);
  console.log('🧪 JWT_SECRET:', process.env.JWT_SECRET);

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET); // <- importante que coincida con el usado en login
    req.usuario = decoded; // añade los datos decodificados al request
    next(); // pasa al siguiente middleware o controlador
  } catch (error) {
    return res.status(403).json({ error: 'Token inválido', detalles: error.message });
  }
};

module.exports = { verificarToken };

