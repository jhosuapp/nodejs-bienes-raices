import jwt from 'jsonwebtoken';

const generateJWT = (id)=>{
    return jwt.sign({
        id: id
    }, 'secret', {
        expiresIn: '1d'
    });
}


const generateToken = () => Math.random().toString(32).substring(2) + Date.now().toString(32);

export { generateToken, generateJWT }