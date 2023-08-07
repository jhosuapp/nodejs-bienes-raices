const thanksView = (req, res)=>{
    res.render('layout/thanks',{
        page: 'Crear cuenta',
        title: 'test',
        description: 'test'
    });
}


export { thanksView }