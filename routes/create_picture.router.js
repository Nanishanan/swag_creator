const router = require('express').Router();
const swag_controller = require('../controller/create_picture.controller')

router.post('/upload', swag_controller.upload)

module.exports = router