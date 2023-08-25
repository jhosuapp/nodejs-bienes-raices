//IMPORTANDO DEPENDENCIA
import express from 'express';
import csrf from 'csurf';
import cookieParser from 'cookie-parser';
//RUTAS
import userRoutes from './routes/UserRoutes.js';
import generalRoutes from './routes/GeneralRoutes.js';
import propertiesRoutes from './routes/PropertiesRoutes.js';
//CONEXIONES
import dataBase from './config/DataBase.js';
//MIDDLEWARE
import UserMiddleware from './middleware/UserMiddleware.js';

//CREAR LA APP
const app = express();

//HABILITAR LECTURA DE DATOS EN FORMULARIOS
app.use( express.urlencoded({
    extended: true
}));

//HABILITAR COOKIES PARSER
app.use( cookieParser() );

//HABILITAR CSRF
app.use( csrf({cookie: true}));

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
app.use('/properties', UserMiddleware, propertiesRoutes);
app.use('/', generalRoutes);

//CARPETA PUBLICA
app.use( express.static('public') );


//DEFINICIÓN DEL PUERTO Y ARRANQUE DEL PROYECTO
const port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log(`La app se esta corriendo en el puerto ${port}`);
});