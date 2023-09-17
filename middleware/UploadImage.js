import multer from 'multer';
import path from 'path';
import { generateToken } from '../helpers/Tokens.js';

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        console.log(req);
        cb(null, './public/uploads/');
    },
    filename: function(req, file, cb){
        cb(null, generateToken() + path.extname(file.originalname))
    }
});

const upload = multer({storage});

export default upload;