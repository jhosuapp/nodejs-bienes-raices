const errorView = (req, res)=>{
    res.render('layout/error',{
        page: '',
        description: '',
    });
}

export { errorView }