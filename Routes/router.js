const express=require('express')
const userController=require('../Controllers/userController')

const router=new express.Router()

//Register
router.post('/register',userController.register)

//export router
module.exports=router