import { DataTypes } from 'sequelize';
import bcrypt from 'bcrypt';
import dataBase from '../config/DataBase.js';


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
},{
    hooks: {
        beforeCreate: async function(user){
            const salt = await bcrypt.genSalt(10);
            user.password = await bcrypt.hash( user.password, salt );
        }
    },
    scopes: {
        deleteData: {
            attributes: {
                exclude: ['password', 'token', 'confirmation', 'createdAt', 'updatedAt']
            }
        }
    }
});

//METODOS PERSONALIZADOS
User.prototype.verifyPassword = function(password){
    return bcrypt.compareSync(password, this.password);
}

export default User;