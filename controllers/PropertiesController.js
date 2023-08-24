//LIBRERÍA PARA VALIDAR CONTENIDO DE LOS CAMPOS
import { check, validationResult } from 'express-validator';
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
        page: 'Crear propiedad',
        enableNav: true,
        csrfToken: req.csrfToken(),
        categories,
        prices,
        data: {}
    });
}

const saveData = async (req, res)=>{
    //VALIDACIONES DE LOS CAMPOS
    await check('title').notEmpty().withMessage('El título no puede estar vacío').run(req);
    await check('description').notEmpty().withMessage('La descripción no puede ir vacía')
    .isLength({max: 200}).withMessage('La descripción no puede ser mayor a 200 caracteres').run(req);
    await check('category').isNumeric().withMessage('Seleccione una categoría').run(req);
    await check('price').isNumeric().withMessage('Seleccione un rango de precio').run(req);
    await check('rooms').isNumeric().withMessage('Seleccione un rango de precio').run(req);
    await check('parkings').isNumeric().withMessage('Seleccione el número de parqueaderos').run(req);
    await check('wc').isNumeric().withMessage('Seleccione el número de baños').run(req);
    await check('street').notEmpty().withMessage('Ubique la casa en el mapa').run(req);

    const result = validationResult(req);

    //TRAEMOS TODOS LOS DATOS DE LA BD
    const [ categories, prices ] = await Promise.all([
        categoriesModel.findAll(),
        pricesModel.findAll(),
    ]);

    //VALIDAMOS QUE LOS CAMPOS ESTÉN BIEN
    if(!result.isEmpty()){
        return res.render('properties/create', {
            page: 'Crear propiedad',
            enableNav: true,
            csrfToken: req.csrfToken(),
            categories,
            prices,
            errors: result.array(),
            data: req.body
        });
    }

    return res.json(req.body);

}


export { admin, create, saveData }