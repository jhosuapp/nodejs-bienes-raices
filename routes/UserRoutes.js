import express from 'express';
import { formLogin, formRegister } from '../controllers/UserController.js';

const router = express.Router();
//PAGINA DE INICIO
router.get('/login', formLogin);
router.get('/register', formRegister);


export default router