//LIBRERÍA PARA VALIDAR CONTENIDO DE LOS CAMPOS
import { check, validationResult } from 'express-validator';
//MODELOS PARA GUARDADO DE REGISTRO EN BD
import User  from '../models/UserModel.js';
//ENVIO DE MAIL
import { emailRegister } from '../helpers/Emails.js';

//RENDERIZACIÓN DE LA PÁGINA DE RECUPERAR CONTRASEÑA
const formPassword = (req, res)=>{
    res.render('auth/recover-password', {
        page: 'Recuperar contraseña',
        csrfToken: req.csrfToken()
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
    const validateEmail = await User.findOne({where: {email}});
    if(!validateEmail){
        return res.render(('auth/recover-password'),{
            page: 'Recuperar contraseña',
            csrfToken: req.csrfToken(),
            errors: [{ msg:'El email no se encuentra registrado' }]
        });
    }

}

export { formPassword, validateDataFormPassword }