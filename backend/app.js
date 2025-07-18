const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

require('dotenv').config({ path: path.resolve(__dirname, '.env') });

const app = express();

app.use(cors());
app.use(express.json()); 

// Rutas
const usuariosRoutes = require('./routes/usuarios.routes');
const authRoutes = require('./routes/auth.routes'); // ✅ AÑADIDO
app.use('/usuarios', usuariosRoutes);
app.use('/auth', authRoutes); // ✅ AÑADIDO

// Ruta raíz
app.get('/', (req, res) => {
  res.send('Servidor funcionando correctamente 🚀');
});

// Conexión a MongoDB y arranque del servidor
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('✅ Conexión a MongoDB exitosa');

    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Servidor escuchando en http://localhost:${PORT}`);
    });
  })
  .catch(err => {
    console.error('❌ Error al conectar a MongoDB:', err);
  });

