TechStore — Plataforma E-commerce Full Stack

1-Integrantes
1.1-Carlos Guillermo Elissalde Figueroa
1.2-INACAP — Sede Los Ángeles, Chile
1.3-Programación Front End

---

2-Objetivo del Proyecto

El objetivo principal de este proyecto es diseñar, desarrollar e implementar una plataforma web de comercio electrónico completamente funcional para TechStore SpA. La aplicación permite la navegación de productos tecnológicos, filtrado interactivo en tiempo real y gestión del carrito de compras, todo bajo una arquitectura modular y escalable que conecta un frontend reactivo con un backend robusto de base de datos.

---

3-Tecnologías Utilizadas

3.1-Frontend
3.1.1-React.js: Biblioteca de JavaScript para la construcción de la interfaz basada en componentes modulares.
3.1.2-HTML5 & CSS3: Estructuración y diseño estilizado mediante el uso estricto de CSS Grid y Flexbox.
3.1.3-FontAwesome: Librería de vectores para el renderizado de iconos sociales comerciales.

3.2-Backend & Base de Datos
3.2.1-Node.js & Express: Entorno de ejecución y framework para el levantamiento de la API REST de productos.
3.2.2-MongoDB / MariaDB: Sistemas de bases de datos para el almacenamiento seguro y persistencia del catálogo tecnológico.

---

4-Estructura del Proyecto

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

5-Instrucciones de Instalación

Sigue estos pasos para clonar y ejecutar el proyecto de forma local en tu computador:

5.1-git clone [https://github.com/smokcard/techstore.git](https://github.com/smokcard/techstore.git)
cd techstore_proyecto

5.2-Levantar el Backend

cd techstore-backend
npm install
npm start

El servidor backend quedará corriendo en el puerto http://localhost:5000.

5.3-Levantar el Frontend

Abre una nueva terminal en la raíz del proyecto y ejecuta:
cd techstore
npm install
npm run dev

Abre tu navegador en la ruta local indicada por Vite (usualmente http://localhost:5173).


6-Dificultades Encontradas y Soluciones

Alineación y Contraste Visual: Inicialmente, el texto del banner se encontraba aglomerado y el buscador presentaba un problema de visibilidad (letra blanca sobre fondo blanco). Se solucionó reestructurando las propiedades line-height, letter-spacing y forzando la propiedad color en las hojas de estilo del input de búsqueda.

Identidad Corporativa (Branding): El uso de emojis o iconos vectoriales genéricos restaba profesionalismo a la cabecera. Se resolvió migrando hacia una integración de assets reales (.png con transparencias) importados dinámicamente como componentes de React, unificando el isotipo con la marca textual de la empresa.

Advertencias de Entorno de Desarrollo (Sistemas Operativos): Durante el control de versiones con Git, se presentaron advertencias de conversión de formato de saltos de línea (LF a CRLF) debido a las diferencias de codificación entre Windows y Linux. Esto se mitiga configurando la propiedad global core.autoclf en el entorno local.


7-Conclusiones

El desarrollo completo de este proyecto ha consolidado la importancia de construir interfaces web bajo el paradigma de la programación modular orientada a componentes. La separación nítida de responsabilidades en el Frontend (vistas separadas de la lógica del estado) garantiza que la plataforma de TechStore sea altamente mantenible, escalable frente a futuras integraciones de pasarelas de pago y cumpla con los estándares técnicos y de rendimiento exigidos en el ámbito profesional informático.
