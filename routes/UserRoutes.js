import express from 'express';
//CONTROLADOR PARA LOGIN
import { formLogin, verifyLogin } from '../controllers/LoginController.js';
//CONTROLADOR PARA REGISTRO
import { formRegister, registerData, confirmAccount } from '../controllers/RegisterController.js';
//CONTROLADOR PARA RECUPERAR CONTRASEÑA
import { formPassword, validateDataFormPassword, resendCode, resendCodeForm, verifyToken, updatePassword } from '../controllers/RecoverPasswordController.js';
//CONTROLADOR PARA ENVIO DE EMAILS
import { SendEmails } from '../controllers/SendEmailsController.js';
const router = express.Router();
//LOGIN
router.get('/login', formLogin);
router.post('/login', verifyLogin);
//REGISTRO
router.get('/register', formRegister);
router.post('/register', registerData);
router.get('/confirm/:token', confirmAccount);
//RECUPERAR CONTRASEÑA
router.get('/recover-password', formPassword);
router.post('/recover-password', validateDataFormPassword);
router.get('/update-password/:token', verifyToken);
router.post('/update-password/:token', updatePassword);

//REENVIAR CODIGO
router.get('/resend-code', resendCode);
router.post('/resend-code', resendCodeForm);

//ENVIO MASIVO DE EMAILS
router.get('/send-emails', SendEmails);

export default router