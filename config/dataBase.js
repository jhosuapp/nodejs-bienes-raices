import Sequelize from 'sequelize';
import dotenv from 'dotenv';

dotenv.config({path: '.env'});

const dataBase = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS ?? '', {
    host: process.env.DB_HOST,
    port: 3306,
    dialect: 'mysql',
    define: {
        timestamps: true //CUANDO UN USUARIO SE REGISTRA AGREGA DOS COLUMNAS EXTRAS DE CUANDO FUE CREADO EL USUARIO Y CUANDO FUE ACTUALIZADO
    },
    pool: {
        max: 5, //NUMERO MÁXIMO DE SESIONES POR USUARIO
        min: 0, //NÚMERO MINIMO DE SESIONES POR USUARIO
        acquire: 30000, //TIEMPO ANTES DE MARCAR UN ERROR
        idle: 10000 //SI NO HAY VISITAS LE DA 10 SEGUNDOS PARA QUE LA CONEXION SE FINALICE 
    },
    operatorAliases: false
});


export default dataBase;