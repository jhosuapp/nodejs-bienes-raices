const admin = (req, res)=>{
    res.render('properties/admin', {
        page: 'Mis propiedades',
        enableNav: true
    });
}

const create = (req, res)=>{
    res.render('properties/create', {
        page: 'Crear propiedades',
        enableNav: true
    });
}



export { admin, create }