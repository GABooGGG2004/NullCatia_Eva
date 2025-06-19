const express = require('express');
const router = express.Router();
const indexController = require('../db/controllers/indexController');

router.get('/', indexController.home);

module.exports = router;
