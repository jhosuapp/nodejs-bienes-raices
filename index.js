//IMPORTANDO DEPENDENCIA
import express from 'express';
//RUTAS
import userRoutes from './routes/UserRoutes.js';
//CONEXIONES
import dataBase from './config/DataBase.js';

//CREAR LA APP
const app = express();

//HABILITAR LECTURA DE DATOS EN FORMULARIOS
app.use( express.urlencoded({
    extended: true
}));

//CONEXION A LA BASE DE DATOS
try {
    await dataBase.authenticate();
    await dataBase.sync();
    // dataBase.sync();
} catch (error) {
    console.log(error);
}

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