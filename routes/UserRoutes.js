import express from 'express';
//CONTROLADOR PARA REGISTRO
import { formRegister, registerData, confirmAccount } from '../controllers/RegisterController.js';
//CONTROLADOR PARA RECUPERAR CONTRASEÑA
import { formPassword, validateDataFormPassword, resendCode, resendCodeForm } from '../controllers/RecoverPasswordController.js';
const router = express.Router();
//LOGIN
// router.get('/login', formLogin);
//REGISTRO
router.get('/register', formRegister);
router.post('/register', registerData);
router.get('/confirm/:token', confirmAccount);
//RECUPERAR CONTRASEÑA
router.get('/recover-password', formPassword);
router.post('/recover-password', validateDataFormPassword);
//REENVIAR CODIGO
router.get('/resend-code', resendCode);
router.post('/resend-code', resendCodeForm);


export default router