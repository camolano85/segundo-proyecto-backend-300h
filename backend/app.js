// backend/app.js

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

// Cargar variables desde .env (asegurando la ruta correcta)
require('dotenv').config({ path: path.resolve(__dirname, '.env') });

// Crear aplicación Express
const app = express();

// Middlewares
app.use(cors());
app.use(express.json()); // Habilita JSON en las peticiones

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('Servidor funcionando correctamente 🚀');
});

// Conexión a MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('✅ Conexión a MongoDB exitosa');

    // Iniciar servidor solo si la conexión es exitosa
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Servidor escuchando en http://localhost:${PORT}`);
    });
  })
  .catch(err => {
    console.error('❌ Error al conectar a MongoDB:', err);
  });
