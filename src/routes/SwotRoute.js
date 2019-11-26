import express from 'express';
const router = express.Router();
import SwotController from '../controllers/SwotController';


//Routes SWOT
router.get('/swots', SwotController.getAll);
router.get('/swots/:swotId', SwotController.getById);
router.get('/swots/nome/:swotName', SwotController.getByName);
router.post('/swots', SwotController.create);
router.put('/swots/:swotId', SwotController.update);
router.delete('/swots/:swotId', SwotController.destroy);



module.exports = router;