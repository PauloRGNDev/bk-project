const express = require('express');
const router = express.Router();
const foodsController = require('../../controllers/api_restful_resources_sender/foodsController');

router.get('/', foodsController.sendFoodsObj);

module.exports = router;