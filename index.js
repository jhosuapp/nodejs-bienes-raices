//IMPORTANDO DEPENDENCIAS DE CON SINTAXIS DE NODE
import express from 'express';
import userRoutes from './routes/UserRoutes.js';

//CREAR LA APP
const app = express();

//ROUTING
app.use('/', userRoutes);

//DEFINICIÓN DEL PUERTO Y ARRANQUE DEL PROYECTO
const port = 3000;
app.listen(port, ()=>{
    console.log(`La app se esta corriendo en el puerto ${port}`);
});