//SEEDERS
import CategoriesSeeder from './Categories.js';
import PricesSeeder from './Prices.js';
//MODELOS
import CategoriesModel from '../models/CategoriesModel.js';
import PricesModel from '../models/PricesModel.js';
//CONEXION A BD
import dataBase from '../config/DataBase.js';

const importData = async ()=>{
    try {
        //AUTENTICAR
        await dataBase.authenticate();
        //GENERAR COLUMNAS
        await dataBase.sync();
        //INSERTAR DATOS
        await CategoriesModel.bulkCreate(CategoriesSeeder);
        await PricesModel.bulkCreate(PricesSeeder);
        process.exit();
    }catch(err) {
        console.log(err);
        process.exit(1);
    }
}

if(process.argv[2] === "-i"){
    importData();
}