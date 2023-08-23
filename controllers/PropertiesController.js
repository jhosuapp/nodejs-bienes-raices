//MODELOS DE CATEGORIAS Y PRECIOS
import categoriesModel from '../models/CategoriesModel.js';
import pricesModel from '../models/PricesModel.js';


//HOME
const admin = (req, res)=>{
    res.render('properties/admin', {
        page: 'Mis propiedades',
        enableNav: true
    });
}

//VISTA PARA CREAR PROPIEDADES
const create = async (req, res)=>{
    //TRAEMOS LAS CATEGORÍAS Y PRECIOS DE LA BD
    const [ categories, prices ] = await Promise.all([
        categoriesModel.findAll(),
        pricesModel.findAll(),
    ]);

    res.render('properties/create', {
        page: 'Crear propiedades',
        enableNav: true,
        categories,
        prices
    });
}



export { admin, create }