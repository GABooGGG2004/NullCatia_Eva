const express = require('express');
const router = express.Router();
const methodOverride = require('method-override');
const territoryController = require('../db/controllers/territoryController');

router.use(methodOverride('_method'));

router.get('/', territoryController.list);
router.get('/nuevo', territoryController.newForm);
router.post('/', territoryController.create);
router.get('/:id/editar', territoryController.editForm);
router.put('/:id', territoryController.update);
router.delete('/:id', territoryController.remove);

module.exports = router;