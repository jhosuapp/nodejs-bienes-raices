import jwt from "jsonwebtoken";
//MODELO DE USUARIO
import { UserModel } from '../models/index.js';

const UserMiddleware = async (req, res, next)=>{

    //VERIFICAMOS LA EXISTENCIA DEL TOKEN
    const { _token } = await req.cookies;

    if(!_token){
        return res.redirect('/auth/login');
    }

    //VERIFICAMOS QUE SEA UN TOKEN VALIDO
    try{
        const decoded = jwt.verify(_token, process.env.JWT);
        const getUser = await UserModel.scope('deleteData').findByPk(decoded.id);

        if(getUser){
            req.user = getUser;
        }else{
            return res.redirect('/auth/login');
        }
        //PASAMOS AL SIGUIENTE MIDDLEWARE
        return next();
    }catch(err){
        return res.clearCookie('_token').redirect('/auth/login');
    }

}

export default UserMiddleware;