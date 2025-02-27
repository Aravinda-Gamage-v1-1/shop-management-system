var express = require('express');
var router = express.Router();
var customerController = require('../controller/CustomerController');

router.get('/getAll',customerController.getAllCustomers)
router.get('/search/:id',customerController.getCustomerById)
router.post('/',customerController.addCustomer)
router.put('/',customerController.updateCustomer)
router.delete('/',customerController.removeCustomer)

module.exports = router