const express = require('express');
const router = express.Router();
const methodOverride = require('method-override');
const catController = require('../db/controllers/catController');

router.use(methodOverride('_method'));

// Rutas RESTful
router.get('/', catController.listCats);
router.get('/nuevo', catController.newCatForm);
router.post('/', catController.createCat);
router.get('/:id/editar', catController.editCatForm);
router.put('/:id', catController.updateCat);
router.delete('/:id', catController.deleteCat);

module.exports = router;
