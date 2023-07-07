import { DataTypes } from 'sequelize';
import dataBase from '../config/dataBase.js';


const User = dataBase.define('users',{ //INDICAMOS EL NOMBRE DE LA TABLA COMO PRIMER PARAMETRO
    name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    token: DataTypes.STRING,
    confirmation: DataTypes.BOOLEAN
});

export default User;