import { DataTypes } from 'sequelize';
import dataBase from '../config/DataBase.js';

const Prices = dataBase.define('prices', {
    price: {
        type: DataTypes.STRING(30),
        allowNull: false
    }
});

export default Prices;