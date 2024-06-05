import PropertiesModel from "./PropertiesModel.js";
import PricesModel from "./PricesModel.js";
import CategoriesModel from "./CategoriesModel.js";
import UserModel from "./UserModel.js";
import SendEmailsUsers from './SendEmailsModel.js';


PropertiesModel.belongsTo(PricesModel);
PropertiesModel.belongsTo(CategoriesModel);
PropertiesModel.belongsTo(UserModel);

export { 
    PropertiesModel,
    PricesModel,
    CategoriesModel,
    UserModel,
    SendEmailsUsers
}