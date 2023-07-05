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


export { formLogin, formRegister }