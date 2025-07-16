# Segundo Proyecto Backend - 300h

## Funcionalidad actual

Este backend permite:

- Crear usuarios con los campos: nombre, correo, contraseña y rol.
- Almacenar los usuarios en MongoDB.
- Probar la API con Postman en la ruta `POST /usuarios`.

## Prueba con Postman

**URL:** `http://localhost:3000/usuarios`  
**Método:** POST  
**Body (JSON):**
```json
{
  "nombre": "Andrés Molano",
  "correo": "andres@correo.com",
  "contraseña": "123456",
  "rol": "usuario"
}

---

## ⚙️ Tecnologías utilizadas

- Node.js
- Express.js
- MongoDB
- Mongoose
- dotenv
- CORS
- Nodemon (modo desarrollo)

---


 Autor
Andrés Molano


