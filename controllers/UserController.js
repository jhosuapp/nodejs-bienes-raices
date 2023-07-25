import { check, validationResult } from 'express-validator';
import User  from '../models/UserModel.js';

//RENDERIZACIÓN DE LA PÁGINA DE LOGIN
const formLogin = (req, res)=>{
    res.render('auth/login', {
        page: 'Iniciar sesión'
    });
}

//RENDERIZACIÓN DE LA PÁGINA DE REGISTRO
const formRegister = (req, res)=>{
    res.render('auth/register', {
        page: 'Crear cuenta'
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
    //VERIFICAR QUE TODO ESTE BIEN
    if(!result.isEmpty()){
        return res.render('auth/register', {
            page: 'Crear cuenta',
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
            errors: [{msg: 'El usuario ya se encuentra registrado'}],
            user: {
                name: req.body.name,
                email: req.body.email
            }
        });
    }

    return;

    const user = await User.create(req.body);
    res.json(user);
}

//RENDERIZACIÓN DE LA PÁGINA DE RECUPERAR CONTRASEÑA
const formPassword = (req, res)=>{
    res.render('auth/recover-password', {
        page: 'Recuperar contraseña'
    });
}


export { formLogin, formRegister, registerData, formPassword}