const express = require('express');

const ModelController = require('../controllers/model-controller')
const modelController = new ModelController();

const router = new express.Router();

router.get('/', modelController.getAllModels);
//router.get('/contracts', contractController.getContracts);
router.get('/:id', modelController.getModelById);
//router.post('/contracts', contractController.createContract);
router.post('/create', modelController.addModel);
router.put('/:id', modelController.updateModel);
router.delete('/delete/:id', modelController.deleteModel);
//router.post('/save', contractController.saveChanges);

module.exports = router;