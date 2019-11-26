import express from 'express';
const router = express.Router();
import EmpresaController from '../controllers/EmpresaController';

//Routes Empresa
router.get('/empresas', EmpresaController.getAll);
router.get('/empresas/:empresaId', EmpresaController.getById);
router.post('/empresas', EmpresaController.create);
router.put('/empresas/:empresaId', EmpresaController.update);
router.delete('/empresas/:empresaId', EmpresaController.destroy);




module.exports = router;