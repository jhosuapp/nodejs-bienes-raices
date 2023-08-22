import { DataTypes } from 'sequelize';
import dataBase from '../config/DataBase.js';

const Categories = dataBase.define('categories', {
    category: {
        type: DataTypes.STRING(30),
        allowNull: false
    }
});

export default Categories;