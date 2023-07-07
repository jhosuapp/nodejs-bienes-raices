import express from 'express';
import { formLogin, formRegister, formPassword, registerData } from '../controllers/UserController.js';

const router = express.Router();
//LOGIN
router.get('/login', formLogin);
//REGISTRO
router.get('/register', formRegister);
router.post('/register', registerData);
//RECUPERAR CONTRASEÑA
router.get('/recover-password', formPassword);


export default router