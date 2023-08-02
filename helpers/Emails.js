import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config({path: '.env'});

//CONFIGURACIÓN DEL EMAIL
const reUserTransport = ()=>{
    const transport = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    return transport;
}

//CONFIRMACIÓN DE DOS PASOS PARA REGISTRO
const emailRegister = async(data)=>{

    const { name, email, token } = data;

    await reUserTransport().sendMail({
        from: 'Jhosua Penagos',
        to: email,
        subject: 'Confirma tu cuenta para continuar',
        text: 'Confirma tu cuenta para continuar',
        html:`
                <p>Hola ${name}, comprueba tu cuenta en bienes raíces</p>
                <p>Tu cuenta ya esta lista, solo debes confirmarla en el siguiente enlace:
                <a href="${process.env.BACKEND_URL}:${process.env.PORT ?? 3000}/auth/confirm/${token}">Confirmar cuenta</a></p>
                <p>Si tú no creaste esta cuenta, puedes ignorar el mensaje</p>
             `
    });

}

//EMAIL PARA RECUPERAR CONTRASEÑA
const emailRecoverPassword = async(data)=>{

    const { name, email, token } = data;

    await reUserTransport().sendMail({
        from: 'Jhosua Penagos',
        to: email,
        subject: 'Restablece tu contraseña',
        text: 'Restablece tu contraseña',
        html:`
                <p>Hola ${name}, has solicitado restablecer tu contraseña</p>
                <p>Sigue el siguiente enlace para generar una contraseña nueva:
                <a href="${process.env.BACKEND_URL}:${process.env.PORT ?? 3000}/auth/confirm/${token}">Reestablecer contraseña</a></p>
                <p>Si tú no solicitaste un cambio de contraseña, puedes ignorar este mensaje</p>
             `
    });

}


export { emailRegister, emailRecoverPassword }