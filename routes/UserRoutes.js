import express from 'express';
import { formLogin, formRegister, formPassword, registerData, confirmAccount } from '../controllers/UserController.js';

const router = express.Router();
//LOGIN
router.get('/login', formLogin);
//REGISTRO
router.get('/register', formRegister);
router.post('/register', registerData);
router.get('/confirm/:token', confirmAccount)
//RECUPERAR CONTRASEÑA
router.get('/recover-password', formPassword);


export default router