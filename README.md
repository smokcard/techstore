#  TechStore — Plataforma E-commerce Full Stack

##  Integrantes
*   Carlos Guillermo Elissalde Figueroa
*   INACAP — Sede Los Ángeles, Chile
*   Programación Front End

---

##  Objetivo del Proyecto
El objetivo principal de este proyecto es diseñar, desarrollar e implementar una plataforma web de comercio electrónico completamente funcional para TechStore SpA. La aplicación permite la navegación de productos tecnológicos, filtrado interactivo en tiempo real y gestión del carrito de compras, todo bajo una arquitectura modular y escalable que conecta un frontend reactivo con un backend robusto de base de datos.

---

## Tecnologías Utilizadas

### Frontend
*   React.js: Biblioteca de JavaScript para la construcción de la interfaz basada en componentes modulares.
*   HTML5 & CSS3: Estructuración y diseño estilizado mediante el uso estricto de CSS Grid y Flexbox.
*   FontAwesome: Librería de vectores para el renderizado de iconos sociales comerciales.

### Backend & Base de Datos
*   Node.js & Express: Entorno de ejecución y framework para el levantamiento de la API REST de productos.
*   MongoDB / MariaDB: Sistemas de bases de datos para el almacenamiento seguro y persistencia del catálogo tecnológico.

---

##  Estructura del Proyecto

El repositorio está organizado de forma unificada utilizando una arquitectura limpia de software:


techstore_proyecto/
├── techstore/                 # --- CARPETA DEL FRONTEND (React) ---
│   ├── src/
│   │   ├── assets/            # Recursos gráficos (Logos corporativos y redes en PNG)
│   │   ├── components/        # Componentes reutilizables (Header, Navbar, Sidebar, ProductCard, etc.)
│   │   ├── App.jsx            # Componente principal e inicialización de estados globales
│   │   └── main.jsx           # Punto de entrada de la aplicación
│   └── package.json           # Dependencias del cliente
│
└── tu_carpeta_backend/        # --- CARPETA DEL BACKEND (API) ---
    ├── config/                # Conexiones a las bases de datos
    ├── routes/                # Endpoints de la API REST (/api/productos)
    ├── server.js              # Archivo de inicio del servidor Node.js
    └── package.json           # Dependencias del servidor