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

const formPassword = (req, res)=>{
    res.render('auth/recover-password', {
        page: 'Recuperar contraseña'
    });
}


export { formLogin, formRegister, formPassword}