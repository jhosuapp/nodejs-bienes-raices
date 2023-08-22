//SEEDERS
import CategoriesSeeder from './Categories.js';
import PricesSeeder from './Prices.js';
//MODELOS
import CategoriesModel from '../models/CategoriesModel.js';
import PricesModel from '../models/PricesModel.js';
//CONEXION A BD
import dataBase from '../config/DataBase.js';

//CREAR TABLAS ESTATICAS
const importData = async ()=>{
    try {
        //AUTENTICAR
        await dataBase.authenticate();
        //GENERAR COLUMNAS
        await dataBase.sync();
        //INSERTAR DATOS
        await Promise.all([
            CategoriesModel.bulkCreate(CategoriesSeeder),
            PricesModel.bulkCreate(PricesSeeder)
        ]);
        process.exit();
    }catch(err) {
        console.log(err + 'Error create');
        process.exit(1);
    }
}

//ELIMINAR TABLAS ESTATICAS
const deleteData = async()=>{
    try{
        await dataBase.sync({force: true});
        process.exit();
    }catch(err) {
        console.log(err + 'Error delete');
        process.exit(1);
    }
}

//FUNCION PARA CREAR TABLAS
process.argv[2] === "-i" && importData();

//FUNCION PARA ELIMINAR TABLAS
process.argv[2] === "-d" && deleteData();