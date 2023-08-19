import express from 'express';
//CONTROLADOR ADMIN
import { admin, create } from '../controllers/PropertiesController.js';

const routerProperties = express.Router();

//HOME
routerProperties.get('/my-properties', admin);
//CREAR PROPIEDADES
routerProperties.get('/create', create);

export default routerProperties;