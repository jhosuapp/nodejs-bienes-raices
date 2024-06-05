import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config({path: '.env'});

//CONFIGURACIÓN DEL EMAIL
const reUserTransport = ()=>{
    const transport = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        secure: false,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        },
        tls: {
            rejectUnauthorized: false
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
                <a href="${process.env.BACKEND_URL}:${process.env.PORT ?? 3000}/auth/update-password/${token}">Reestablecer contraseña</a></p>
                <p>Si tú no solicitaste un cambio de contraseña, puedes ignorar este mensaje</p>
             `
    });

}

//EMAIL MASIVO
const emailMasive = async(data)=>{

    const { name, document_type, document_number, message, email } = data;

    await reUserTransport().sendMail({
        from: 'opinion@alzatuvoz.co',
        // from: 'jhosuapvll@gmail.com',
        to: 'contactenos@sic.gov.co',
        // to: 'jhosuapvll@gmail.com',
        subject: 'Intervención como tercero interesado en los procesos No. Radicado 14-99669 – Radicado No. 24-198835 – Radicado No.24-198836',
        html:`
                <p><b>Atención</b></p>
                <p><b>Superintendencia de Industria y Comercio (SIC)</b></p>
                <p>
                    Mi nombre es ${name}, con documento de identidad número ${document_type} ${document_number} y mi correo electrónico para notificaciones es ${email}. Me dirijo a ustedes para intervenir como parte interesada en los procesos No. Radicado 14-99669  – Radicado No.24-198836 - Radicado No. 24-198835.
                    La posible restricción de vehículo particular en aplicaciones de movilidad me afectaría de la siguiente manera: ${message}
                </p>
                <p>
                    <b>Atentamente,</b><br>
                    <b>${name}</b>
                </p>
             `
    });

}


export { emailRegister, emailRecoverPassword, emailMasive }