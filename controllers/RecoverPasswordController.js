//LIBRERÍA PARA ENCRIPTAR DATOS
import bcrypt from 'bcrypt';
//LIBRERÍA PARA VALIDAR CONTENIDO DE LOS CAMPOS
import { check, validationResult } from 'express-validator';
//HELPER PARA GENERAR TOKEN
import { generateToken } from '../helpers/Tokens.js';
//MODELOS PARA GUARDADO DE REGISTRO EN BD
import User  from '../models/UserModel.js';
//ENVIO DE MAIL
import { emailRecoverPassword } from '../helpers/Emails.js';

//RENDERIZACIÓN DE LA PÁGINA DE RECUPERAR CONTRASEÑA
const formPassword = (req, res)=>{
    res.render('auth/recover-password', {
        page: 'Recuperar contraseña',
        csrfToken: req.csrfToken()
    });
}

//VISTA PARA REENVIAR CODIGO
const resendCode =  (req, res)=>{
    res.render(('auth/resend-code'),{
        page: 'Ya se ha enviado un correo',
        csrfToken: req.csrfToken(),
        verifyToken: true,
        description: 'Ya se ha enviado un enlace de acceso a su correo electronico, si lo desea enviar nuevamente de clic en el siguiente botón:',
    });
} 

//VALIDAMOS QUE LOS CAMPOS ESTÉN BIEN Y QUE EL CORREO EXISTA EN BD
const validateDataFormPassword = async(req, res)=>{

    await check('email').isEmail().withMessage('Ingrese un email valido').run(req);
    let result = validationResult(req);
    //VERIFICAR QUE TODO LOS CAMPOS HAYAN SIDO RELLENADOS CORRECTAMENTE
    if(!result.isEmpty()){
        return res.render(('auth/recover-password'),{
            page: 'Recuperar contraseña',
            csrfToken: req.csrfToken(),
            errors: [{ msg:'Ingrese email valido' }]
        });
    }

    //VALIDAMOS SI EL CORREO EXISTE
    const { email } = req.body;
    const getDataUser = await User.findOne({where: {email}});
    if(!getDataUser){
        return res.render(('auth/recover-password'),{
            page: 'Recuperar contraseña',
            csrfToken: req.csrfToken(),
            errors: [{ msg:'El email no se encuentra registrado' }]
        });
    }

    //VALIDAMOS QUE NO TENGA UN TOKEN ACTIVO
    if(getDataUser.token){
        return res.render(('auth/resend-code'),{
            page: 'Ya se ha enviado un correo',
            csrfToken: req.csrfToken(),
            verifyToken: true,
            description: 'Ya se ha enviado un enlace de acceso a su correo electronico, si lo desea enviar nuevamente de clic en el siguiente botón:',
        });
    }

    //GENERAR TOKEN Y GUARDADO EN BASE DE DATOS
    getDataUser.token = generateToken();
    await getDataUser.save();

    //ENVÍO DEL EMAIL
    emailRecoverPassword({
        name: getDataUser.name,
        email: getDataUser.email,
        token: getDataUser.token
    });

    res.render('layout/thanks', {
        page: '',
        title: 'Envío exitoso',
        description: 'Se ha enviado un enlace de acceso al correo ingresado anteriormente',
    });

}

//REENVIAMOS CODIGO DE VERIFICACION EN CASO DE QUE NO LLEGUÉ
const resendCodeForm = async(req, res)=>{

    const  { email } = await req.body;
    const getTokenUser = await User.findOne({where: { email }});

    //ENVÍO DEL EMAIL
    emailRecoverPassword({
        name: getTokenUser.name,
        email: getTokenUser.email,
        token: getTokenUser.token
    });

    res.render('layout/thanks', {
        page: '',
        title: 'Envío exitoso',
        description: 'Se ha enviado un enlace de acceso al correo ingresado anteriormente',
    });
}

//ACTUALIZACIÓN DE CONTRASEÑA, VALIDACIÓND DE TOKEN
const verifyToken = async (req, res)=>{
    const { token } = req.params;

    const verifyTokenPass = await User.findOne({ where: {token} });

    if(!verifyTokenPass){
        res.render('layout/error', {
            page: `Reestablecer contraseña`,
            description: 'Hubo un error al validar tu información, intente de nuevo',
            link: '/auth/recover-password',  
            btnCopy: 'Recuperar contraseña'
        });
    }

    //MOSTRAMOS FORMULARIO PARA ACTUALIZAR CONTRASEÑA
    res.render('auth/update-password', {
        page: 'Reestablecer contraseña',
        csrfToken: req.csrfToken(),
    });
}

//RENDER DE LA VISTA PARA ACTUALIZAR CONTRASEÑA
const updatePassword = async (req, res)=>{
    //VALIDACIONES
    await check('password').isLength({ min: 6 }).withMessage('La constraseña debe tener mínimo 6 caracteres').run(req);
    await check('verifyPass').equals(req.body.password).withMessage('Las contraseñas deben coincidir').run(req);

    let result = validationResult(req);
    //VERIFICAR QUE TODO LOS CAMPOS HAYAN SIDO RELLENADOS CORRECTAMENTE
    if(!result.isEmpty()){
        return res.render(`auth/update-password`, {
            page: 'Reestablecer contraseña',
            csrfToken: req.csrfToken(),
            errors: result.array(),
        });
    }
    //OBTENEMOS EL USUARIO ACTUAL
    const { token } = req.params;
    const getUser = await User.findOne({ where: {token} });
    //ACTUALIZAMOS LA CONTRASEÑA Y LA ENCRIPTAMOS
    const { password } = req.body;
    const salt = await bcrypt.genSalt(10);
    getUser.password = await bcrypt.hash( password, salt );
    getUser.token = null;
    getUser.save();
    //POR ULTIMO DAMOS UN MENSAJE DE SUCCES AL USUARIO
    res.render('layout/thanks',{
        title: '¡Contraseña reestablecida!',
        description: 'Se ha reestablecido la contraseña de manera correcta'
    });

}

export { formPassword, validateDataFormPassword, resendCode, resendCodeForm, verifyToken, updatePassword }