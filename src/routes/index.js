import express from 'express';
const router = express.Router();
import EmpresaRoute from '../routes/EmpresaRoute';
import PlanoAcaoRoute from '../routes/PlanoAcaoRoute';
import SwotRoute from '../routes/SwotRoute';
import ValorRoute from '../routes/ValorRoute';

//Routes test 
router.get('/', (req, res) => {
    return res.send({ message: 'Deu bom GET Raiz' })
});

router.post('/', (req, res) => {
    return res.send({ message: 'Deu bom POST Raiz' })
});

router.use('/api', EmpresaRoute);
router.use('/api', PlanoAcaoRoute);
router.use('/api', SwotRoute);
router.use('/api', ValorRoute);


module.exports = router;