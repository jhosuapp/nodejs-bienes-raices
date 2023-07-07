import User  from '../models/UserModel.js';

const formLogin = (req, res)=>{
    res.render('auth/login', {
        page: 'Iniciar sesión'
    });
}

const formRegister = (req, res)=>{
    res.render('auth/register', {
        page: 'Crear cuenta'
    });
}
const registerData = async(req, res)=>{
    const user = await User.create(req.body);

    res.json(user);
}

const formPassword = (req, res)=>{
    res.render('auth/recover-password', {
        page: 'Recuperar contraseña'
    });
}


export { formLogin, formRegister, registerData, formPassword}