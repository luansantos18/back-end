import express from 'express';
const router = express.Router();
import PlanoAcaoController from '../controllers/PlanoAcaoController';


//Routes Plano Acao
router.get('/plano_acoes', PlanoAcaoController.getAll);
router.get('/plano_acoes/:planoAcaoId', PlanoAcaoController.getById);
router.post('/plano_acoes', PlanoAcaoController.create);
router.put('/plano_acoes/:planoAcaoId', PlanoAcaoController.update);
router.delete('/plano_acoes/:planoAcaoId', PlanoAcaoController.destroy);


module.exports = router;