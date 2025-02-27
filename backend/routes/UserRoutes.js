var express = require('express')
var router = express.Router()
var userController = require('../controller/UserController')

/*router.get('/getAll',userController.getAllUsers)*/
router.get('/search/:id',userController.getUserById)
router.post('/signup',userController.addUser)
router.post('/signin',userController.logUser)
/*router.put('/',userController.updateUser)
router.delete('/',userController.deleteUser)*/

module.exports = router
