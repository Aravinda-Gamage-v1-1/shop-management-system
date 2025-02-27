var express = require('express')
var router = express.Router()
var salesController = require('../controller/salesController')


router.post('/',salesController.addOrder)
router.get('/search/:id',salesController.getOrderById)
module.exports = router
