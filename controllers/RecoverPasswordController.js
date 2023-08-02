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

    //GENERAR TOKEN Y ENVIAR EMAIL
    getDataUser.token = generateToken();
    await getDataUser.save();

    //ENVÍO DEL EMAIL
    emailRecoverPassword({
        name: getDataUser.name,
        email: getDataUser.email,
        token: getDataUser.token
    });

    res.json({
        status: 'successful'
    })

}

export { formPassword, validateDataFormPassword }