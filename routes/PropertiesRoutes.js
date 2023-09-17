import express from 'express';
//CONTROLADOR PROPIEDADES
import { admin, create, saveData, addImage, saveImage } from '../controllers/PropertiesController.js';
//MIDDLEWARE
import upload from '../middleware/UploadImage.js';

const routerProperties = express.Router();

//HOME
routerProperties.get('/my-properties', admin);
//CREAR PROPIEDADES
routerProperties.get('/create', create);
routerProperties.post('/create', saveData);
//AÑADIR IMAGEN A LA PROPIEDAD
routerProperties.get('/add-image/:id', addImage);
routerProperties.post('/add-image/:id', upload.single('imageProperties'), saveImage);


export default routerProperties;