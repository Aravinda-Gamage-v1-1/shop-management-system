var express = require('express')
var router = express.Router()
var employeeController = require('../controller/EmployeeController')

router.get('/getAll',employeeController.getAllEmployees)
router.get('/search/:id',employeeController.getEmployeeById)
router.post('/',employeeController.addEmployee)
router.put('/',employeeController.updateEmployee)
router.delete('/',employeeController.deleteEmployee)

module.exports = router

