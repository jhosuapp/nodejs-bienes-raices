import express from "express";
//IMPORT CONTROLADOR DE GRACIAS
import { thanksView } from '../controllers/ThanksController.js';


const routerGeneral = express.Router();

//PAGINA DE GRACIAS
routerGeneral.get('/thanks', thanksView);

export default routerGeneral;