const express = require('express');
const router = express.Router();
const housingController = require('../controllers/housing.controller');


router.post('/', housingController.createProperty);
router.get('/', housingController.getAllProperties)
router.get('/:id', housingController.getPropertyById);
router.put('/:id', housingController.updatePropertyById);
router.delete('/:id', housingController.deletePropertyById);

module.exports = router;