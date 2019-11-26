import express from 'express';
const router = express.Router();
import ValorController from '../controllers/ValorController';

//Routes Valor
router.get('/valores', ValorController.getAll);
router.get('/valores/:valorId', ValorController.getById);
router.post('/valores', ValorController.create);
router.put('/valores/:valorId', ValorController.update);
router.delete('/valores/:valorId', ValorController.destroy);

module.exports = router;