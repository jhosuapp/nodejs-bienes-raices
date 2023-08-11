import { check, validationResult } from 'express-validator';
import User from '../models/UserModel.js';

//RENDER DE LA VISTA
const formLogin = (req, res)=>{
    res.render('auth/login',{
        page: 'Iniciar sesión',
        csrfToken: req.csrfToken(),
    });
}

//ENVÍO DEL FORMULARIO
const verifyLogin = async(req, res)=>{

    //VALIDACIONES
    await check('email').isEmail().withMessage('Ingrese un email valido').run(req);
    await check('password').isLength({ min: 6 }).withMessage('La constraseña debe tener mínimo 6 caracteres').run(req);

    let result = validationResult(req);
    //VERIFICAR QUE TODO LOS CAMPOS HAYAN SIDO RELLENADOS CORRECTAMENTE
    if(!result.isEmpty()){
        return res.render('auth/login', {
            page: 'Iniciar sesión',
            csrfToken: req.csrfToken(),
            errors: result.array(),
        });
    }

    const { email } = req.body;
    const dataUser = await User.findOne({where: { email } });

    if(!dataUser){
        return res.render('auth/login', {
            page: 'Iniciar sesión',
            csrfToken: req.csrfToken(),
            errors: [{msg: 'El usuario o contraseña son incorrectos'}],
        });
    }

    res.json(req.body);
}


export { formLogin, verifyLogin }