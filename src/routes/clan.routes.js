const express = require('express');
const router = express.Router();
const clanController = require('../db/controllers/clanController');
const methodOverride = require('method-override');

router.use(methodOverride('_method'));

router.get('/', clanController.list);
router.get('/nuevo', clanController.newForm);
router.post('/', clanController.create);
router.get('/:id/editar', clanController.editForm);
router.put('/:id', clanController.update);
router.delete('/:id', clanController.remove);

module.exports = router;
