import express from 'express';
//CONTROLADOR PROPIEDADES
import { admin, create, saveData } from '../controllers/PropertiesController.js';

const routerProperties = express.Router();

//HOME
routerProperties.get('/my-properties', admin);
//CREAR PROPIEDADES
routerProperties.get('/create', create);
routerProperties.post('/create', saveData);

export default routerProperties;