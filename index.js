//IMPORTANDO DEPENDENCIAS DE CON SINTAXIS DE NODE
import express from 'express';
import userRoutes from './routes/UserRoutes.js';

//CREAR LA APP
const app = express();

//HABILITAR PUG
app.set('view engine', 'pug');
app.set('views', './views');

//ROUTING
app.use('/auth', userRoutes);

//CARPETA PUBLICA
app.use( express.static('public') );


//DEFINICIÓN DEL PUERTO Y ARRANQUE DEL PROYECTO
const port = 3000;
app.listen(port, ()=>{
    console.log(`La app se esta corriendo en el puerto ${port}`);
});