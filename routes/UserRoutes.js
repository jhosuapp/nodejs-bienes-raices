import express from 'express';

const router = express.Router();
//PAGINA DE INICIO
router.get('/', function(req, res){
    res.json(
        {
            mensaje: "hola mundo",
            res: "respuesta",
        }
    );
});
//NOSOTROS
router.get('/nosotros', function(req, res){
    res.json(
        {
            mensaje: "página de nosotros"
        }
    );
});

export default router