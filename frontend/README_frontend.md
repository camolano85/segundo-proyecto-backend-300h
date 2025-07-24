# Frontend - Proyecto Venta de Computadores

Este frontend está construido con Angular utilizando componentes standalone. Permite a los usuarios registrarse, iniciar sesión y visualizar contenido personalizado según su autenticación.

## Funcionalidades

- Registro y login con validaciones.
- Dashboard personalizado al iniciar sesión.
- Protección de rutas usando `AuthGuard`.
- Navegación dinámica con `RouterOutlet`.
- Almacenamiento del token JWT en `localStorage`.
- Estilos modernos y responsivos con CSS.

## Estructura

```
frontend/
├── src/
│   ├── app/
│   │   ├── components/      # Navbar y otros componentes
│   │   ├── pages/           # Inicio, Login, Registro, Dashboard
│   │   ├── services/        # AuthService
│   │   ├── guards/          # AuthGuard
│   │   └── models/          # Modelos de datos
├── assets/
├── main.ts
├── index.html
└── tsconfig.json
```

## Tecnologías

- Angular standalone (sin NgModules)
- Angular Router
- Reactive Forms
- TypeScript
- JWT + LocalStorage

## Instalación y ejecución

```bash
cd frontend
npm install
ng serve
```

El frontend se ejecutará en: `http://localhost:4200`

## Notas

- Asegúrate de que el backend esté corriendo en `http://localhost:3000` para que la autenticación funcione correctamente.
