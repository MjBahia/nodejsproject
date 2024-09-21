const express = require('express');
const router = express.Router();

const main = require('../controller/MainController');

router.get('/', main.index);
router.get('/coke', main.coke);
router.get('/sprite', main.sprite);
router.get('/royal', main.royal);
router.get('/pepsi', main.pepsi);

module.exports = router;