import { check, validationResult } from 'express-validator';
import User from '../models/UserModel.js';
import { generateJWT } from '../helpers/Tokens.js';

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
    await check('password').notEmpty().withMessage('El campo de contraseña es obligatorio').run(req);

    let result = validationResult(req);
    //VERIFICAR QUE TODO LOS CAMPOS HAYAN SIDO RELLENADOS CORRECTAMENTE
    if(!result.isEmpty()){
        return res.render('auth/login', {
            page: 'Iniciar sesión',
            csrfToken: req.csrfToken(),
            errors: result.array(),
        });
    }

    //BUSCAMOS EL USUARIO POR MEDIO DEL CORREO
    const { email, password } = req.body;
    const dataUser = await User.findOne({where: { email } });

    //VALIDAMOS QUE SE HAYA CONFIRMADO LA CUENTA
    if(!dataUser.confirmation){
        return res.render('auth/login', {
            page: 'Iniciar sesión',
            csrfToken: req.csrfToken(),
            errors: [{msg: 'Debe confirmar su cuenta antes de continuar'}],
        });
    }

    //VALIDAMOS QUE EL EMAIL Y CONTRASEÑA COINCIDAN
    const verifyPasswordUser = dataUser.verifyPassword(password);
    if(!dataUser || !verifyPasswordUser){
        return res.render('auth/login', {
            page: 'Iniciar sesión',
            csrfToken: req.csrfToken(),
            errors: [{msg: 'El usuario o contraseña son incorrectos'}],
        });
    }

    //AUTENTICAR USUARIO
    const token = generateJWT(dataUser.id);

    return res.cookie('_token', token,{
        httpOnly: true,
        expires: 172800000
    }).redirect('/properties/my-properties');

}


export { formLogin, verifyLogin }