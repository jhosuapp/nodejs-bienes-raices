import express from 'express';
//CONTROLADOR ADMIN
import { admin } from '../controllers/PropertiesController.js';

const routerProperties = express.Router();

routerProperties.get('/my-properties', admin);

export default routerProperties;