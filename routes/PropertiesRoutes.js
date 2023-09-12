import express from 'express';
//CONTROLADOR PROPIEDADES
import { admin, create, saveData, addImage } from '../controllers/PropertiesController.js';

const routerProperties = express.Router();

//HOME
routerProperties.get('/my-properties', admin);
//CREAR PROPIEDADES
routerProperties.get('/create', create);
routerProperties.post('/create', saveData);
//AÑADIR IMAGEN A LA PROPIEDAD
routerProperties.get('/add-image/:id', addImage);


export default routerProperties;