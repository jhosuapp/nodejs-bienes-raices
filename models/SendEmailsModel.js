import { DataTypes } from 'sequelize';
import dataBase from '../config/DataBase.js';


const SendEmailsUsers = dataBase.define('emails',{
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    last_name: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    document_type:{
        type: DataTypes.STRING(50),
        allowNull: false
    },
    email:{
        type: DataTypes.STRING(255),
        allowNull: false
    },
    document_number:{
        type: DataTypes.STRING(50),
        allowNull: false
    },
    message:{
        type: DataTypes.STRING(1000),
        allowNull: false
    },
    status:{
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    }
});

export default SendEmailsUsers;