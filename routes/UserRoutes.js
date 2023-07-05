import express from 'express';
import { formLogin, formRegister, formPassword } from '../controllers/UserController.js';

const router = express.Router();
//PAGINA DE INICIO
router.get('/login', formLogin);
router.get('/register', formRegister);
router.get('/recover-password', formPassword);


export default router