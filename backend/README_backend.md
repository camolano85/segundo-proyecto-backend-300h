# Backend - Proyecto Venta de Computadores

Este backend está desarrollado en Node.js con Express y utiliza MongoDB para almacenar usuarios y manejar autenticación JWT.

## Funcionalidades

- Registro de usuarios (`POST /usuarios`)
- Login de usuarios (`POST /login`)
- Ruta protegida (`GET /usuarios/perfil`) con middleware JWT
- Validaciones básicas de datos
- Cifrado de contraseñas con bcrypt

## Estructura

```
backend/
├── controllers/
│   ├── auth.controller.js
│   └── usuarios.controller.js
├── models/
│   └── Usuario.js
├── routes/
│   ├── auth.routes.js
│   └── usuarios.routes.js
├── middlewares/
│   └── auth.js
├── app.js
├── .env
└── package.json
```

## Variables de entorno (.env)

```env
PORT=3000
MONGO_URI=mongodb://localhost:27017/ventacomputadores
JWT_SECRET=tu_clave_secreta_segura
```

## Instalación y ejecución

```bash
cd backend
npm install
npm run dev
```

El backend se ejecutará en: `http://localhost:3000`

## Notas

- El backend expone rutas en `/usuarios` y `/login`.
- Usa JWT para autenticación y protege rutas con middleware personalizado.
- Compatible con el frontend construido en Angular.

## Requiere MongoDB en ejecución.
