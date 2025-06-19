const express = require('express');
const router = express.Router();
const scrollController = require('../db/controllers/scrollController');
const methodOverride = require('method-override');

router.use(methodOverride('_method'));

router.get('/', scrollController.list);
router.get('/nuevo', scrollController.newForm);
router.post('/', scrollController.create);
router.get('/:id/editar', scrollController.editForm);
router.put('/:id', scrollController.update);
router.delete('/:id', scrollController.remove);

module.exports = router;
