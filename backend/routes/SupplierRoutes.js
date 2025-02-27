var express = require('express')
var router = express.Router()
var supplierController = require('../controller/SupplierController')

router.get('/getAll',supplierController.getAllSupplier)
router.get('/search/:id',supplierController.getSupplierById)
router.post('/',supplierController.addSupplier)
router.put('/',supplierController.updateSupplier)
router.delete('/',supplierController.deleteSupplier)

module.exports = router

