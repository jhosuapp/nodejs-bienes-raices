# Nodejs + express bienes raíces

Crea y publica tus propiedades

## Instalación

1. **Clonar el Repositorio**: 
   ```bash
   git clone https://github.com/jhosuapp/nodejs-bienes-raices.git

2. **Instalar dependencias (Se necesita una versión de node mayor a la 1.18.0)**: 
   ```bash
   npm install 

3. **Correr proyecto**: 
   ```bash
   npm run start

## Visualizar la Aplicación

Abre tu navegador y visita `http://localhost:3000` (reemplaza `PORT` con el puerto configurado en tu archivo `.env`) para ver la aplicación en funcionamiento.

## Estructura del Proyecto

- `index.js`: Archivo principal de la aplicación donde se configura Express y se definen las rutas.
- `routes/`: Carpeta que contiene los archivos de rutas de la aplicación.
- `controllers/`: Carpeta que contiene los controladores de la aplicación.
- `models/`: Carpeta que contiene los modelos de la base de datos definidos con Sequelize.
- `views/`: Carpeta que contiene las vistas de la aplicación, escritas en Pug.
- `public/`: Carpeta que contiene los archivos estáticos (CSS, imágenes, JavaScript, etc.).
- `config/`: Carpeta que contiene la configuración de la aplicación, como la configuración de la base de datos.

## Tecnologías Utilizadas

- Node.js
- Express.js
- JavaScript (Vanilla)
- Sass
- Pug
- Sequelize

## Contribución

Si quieres contribuir a este proyecto, ¡eres bienvenido! Puedes abrir un problema o enviar una solicitud de extracción.

## Licencia

Este proyecto está bajo la Licencia MIT.
