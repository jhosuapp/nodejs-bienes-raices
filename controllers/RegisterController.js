//LIBRERÍA PARA VALIDAR CONTENIDO DE LOS CAMPOS
import { check, validationResult } from 'express-validator';
//HELPER PARA GENERAR TOKEN
import { generateToken } from '../helpers/Tokens.js';
//MODELOS PARA GUARDADO DE REGISTRO EN BD
import User  from '../models/UserModel.js';
//ENVIO DE MAIL
import { emailRegister } from '../helpers/Emails.js';


const formRegister = (req, res)=>{
    res.render('auth/register',{
        page: 'Crear cuenta',
        csrfToken: req.csrfToken(),
    });
}

//FORMULARIO DE REGISTRO, GUARDADO DE DATA + VALIDACIONES
const registerData = async(req, res)=>{
    //VALIDACIONES
    await check('name').notEmpty().withMessage('El nombre es obligatorio').run(req);
    await check('email').isEmail().withMessage('Ingrese un email valido').run(req);
    await check('password').isLength({ min: 6 }).withMessage('La constraseña debe tener mínimo 6 caracteres').run(req);
    await check('verifyPass').equals(req.body.password).withMessage('Las contraseñas deben coincidir').run(req);

    let result = validationResult(req);
    //VERIFICAR QUE TODO LOS CAMPOS HAYAN SIDO RELLENADOS CORRECTAMENTE
    if(!result.isEmpty()){
        return res.render('auth/register', {
            page: 'Crear cuenta',
            csrfToken: req.csrfToken(),
            errors: result.array(),
            user: {
                name: req.body.name,
                email: req.body.email
            }
        });
    }

    //VERIFICAR QUE EL USUARIO NO EXISTA EN BASE DE DATOS
    const { name, email, password } = req.body;
    const userExist = await User.findOne( { where : { email } });
    if(userExist){
        return res.render('auth/register', {
            page: 'Crear cuenta',
            csrfToken: req.csrfToken(),
            errors: [{msg: 'El usuario ya se encuentra registrado'}],
            user: {
                name: req.body.name,
                email: req.body.email
            }
        });
    }

    //GUARDAMOS DATOS EN BD
    const user = await User.create({
        name,
        email,
        password,
        token: generateToken()
    });

    //ENVÍO DEL MAIL
    emailRegister({
        name: user.name,
        email: user.email,
        token: user.token
    });

    res.render('auth/register', {
        page: `¡Gracias por tu registro!`,
        succesfull: true,
        description: 'Se ha enviado un enlace de acceso para confirmar tu registro',
        welcome: `Te damos la bienvenida ${name}`,
        user: {
            name: req.body.name,
            email: req.body.email
        }
    });

}

//CONFIRMACIÓN DE LA CUENTA Y VALIDACIÓN DEL TOKEN
const confirmAccount = async(req, res)=>{
    const { token } = await req.params;
    const userToken = await User.findOne( { where: { token } } );
    if(userToken){
        userToken.token = null;
        userToken.confirmation = true;
        await userToken.save();
        return res.render('auth/confirm-account', {
            page: `¡Tu registro ha sido validado!`,
            succesfull: true,
            description: '¡Tu cuenta ya se encuentra activa! inicia sesión para continuar',
        });
    }else{
        return res.render('auth/confirm-account', {
            page: `¡Token invalido!`,
            succesfull: false,
            description: 'El token ingresado no es valido, crea una cuenta para continuar',
        });
    }

}

export { formRegister, registerData, confirmAccount}