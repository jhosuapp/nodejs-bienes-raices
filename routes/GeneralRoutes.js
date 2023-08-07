import express from "express";
//IMPORT CONTROLADOR DE GRACIAS
import { thanksView } from '../controllers/ThanksController.js';
//IMPORT CONTROLADOR DE ERROR 
import { errorView } from '../controllers/ErrorController.js';


const routerGeneral = express.Router();

//PAGINA DE GRACIAS
routerGeneral.get('/thanks', thanksView);
//PAGINA DE ERROR
routerGeneral.get('/error', errorView);

export default routerGeneral;