//LIBRERÍA PARA VALIDAR CONTENIDO DE LOS CAMPOS
import { check, validationResult } from 'express-validator';
//MODELOS DE CATEGORIAS Y PRECIOS
import { CategoriesModel, PricesModel, PropertiesModel  } from '../models/index.js';


//HOME
const admin = (req, res)=>{
    res.render('properties/admin', {
        page: 'Mis propiedades',
    });
}

//VISTA PARA CREAR PROPIEDADES
const create = async (req, res)=>{
    //TRAEMOS LAS CATEGORÍAS Y PRECIOS DE LA BD
    const [ categories, prices ] = await Promise.all([
        CategoriesModel.findAll(),
        PricesModel.findAll(),
    ]);

    res.render('properties/create', {
        page: 'Crear propiedad',
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
        CategoriesModel.findAll(),
        PricesModel.findAll(),
    ]);

    //VALIDAMOS QUE LOS CAMPOS ESTÉN BIEN
    if(!result.isEmpty()){
        return res.render('properties/create', {
            page: 'Crear propiedad',
            csrfToken: req.csrfToken(),
            categories,
            prices,
            errors: result.array(),
            data: req.body
        });
    }

    //DESESTRUCTURAMOS LA RESPUESTA
    const { title, description, rooms, parkings, wc, street, lat, lng, price:priceId, category:categoryId } = req.body;
    const { id:userId } = req.user;

    const propertie = await PropertiesModel.create({
        title,
        description, 
        rooms, 
        parkings, 
        wc, 
        street, 
        lat, 
        lng, 
        priceId, 
        categoryId,
        userId
    });

    //REDIRECCIONAMOS A UN ENDPOINT CON EL ID DE LA PROPIEDAD COMO PARAMETRO
    const { id } = propertie;
    return res.redirect(`/properties/add-image/${id}`);

}


const addImage = async (req, res)=>{
    //TRAEMOS EL ID DE LA PROPIEDAD 
    const { id } = req.params;
    //VALIDAMOS QUE LA PROPIEDAD EXISTA
    const validatePropertie = await PropertiesModel.findByPk(id);
    if(!validatePropertie){
        return res.redirect('/properties/my-properties');
    }
    //VALIDAMOS QUE LA PROPIEDAD NO ESTA PUBLICADA
    const { publish } = validatePropertie;
    if(publish){
        return res.redirect('/properties/my-properties');
    }
    //VALIDAMOS QUE PERTENEZCA AL USUARIO QUE ESTA AUTENTICADO
    if(validatePropertie.userId.toString() !== req.user.id.toString()){
        return res.redirect('/properties/my-properties');
    }
    //RENDERIZAMOS LA VISTA
    res.render('properties/add-image',{
        page: 'Añade la imagen a la propiedad',
        csrfToken: req.csrfToken(),
        validatePropertie
    });
}

const saveImage = async (req, res, next)=>{
    //TRAEMOS EL ID DE LA PROPIEDAD 
    const { id } = req.params;
    //VALIDAMOS QUE LA PROPIEDAD EXISTA
    const validatePropertie = await PropertiesModel.findByPk(id);
    if(!validatePropertie){
        return res.redirect('/properties/my-properties');
    }
    //VALIDAMOS QUE LA PROPIEDAD NO ESTA PUBLICADA
    const { publish } = validatePropertie;
    if(publish){
        return res.redirect('/properties/my-properties');
    }
    //VALIDAMOS QUE PERTENEZCA AL USUARIO QUE ESTA AUTENTICADO
    if(validatePropertie.userId.toString() !== req.user.id.toString()){
        return res.redirect('/properties/my-properties');
    }
    //SI TODO ESTA BIEN RETORNAME ESTA VISTA
    try{
        validatePropertie.image = req.file.filename;
        validatePropertie.publish = 1;

        await validatePropertie.save();

        return res.redirect('/properties/my-properties');
    }catch(err){ console.log('error en la actualización de la imagen') }
}


export { admin, create, saveData, addImage, saveImage }