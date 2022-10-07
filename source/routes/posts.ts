/** source/routes/posts.ts */
import express from 'express';
import ControllerAnimalData from '../Controller/ControllerAnimalData';

const router = express.Router();

router.get('/all/animal', ControllerAnimalData.getAllAnimalData);
router.get('/random/animal', ControllerAnimalData.getRandomAnimalData);
router.post('/insert/animal', ControllerAnimalData.insertNewAnimalData);
router.put('/update/animal', ControllerAnimalData.updateAnimalData);
router.delete('/delete/animal', ControllerAnimalData.deleteAnimalData);

export = router;