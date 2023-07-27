import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config({path: '.env'});

const emailRegister = async(data)=>{
    const transport = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    const { name, email, token } = data;

    await transport.sendMail({
        from: 'Jhosua Penagos',
        to: email,
        subject: 'Confirma tu cuenta para continuar',
        text: 'Confirma tu cuenta para continuar',
        html:`
                <p>Hola ${name}, comprueba tu cuenta en bienes raíces</p>
                <p>Tu cuenta ya esta lista, solo debes confirmarla en el siguiente enlace:
                <a href="${token}">Confirmar cuenta</a></p>
                <p>Si tú no creaste esta cuenta, puedes ignorar el mensaje</p>
             `
    });

}


export { emailRegister }