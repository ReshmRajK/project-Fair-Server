const express=require('express')
const userController=require('../Controllers/userController')
const projectController=require('../Controllers/projectController')
const jwtMiddleware = require('../Middleware/jwtMiddleware')
const multerConfig = require('../Middleware/multerMiddleWare')

const router=new express.Router()

//Register
router.post('/register',userController.register)

//login
router.post('/login',userController.login)

//add projects
router.post('/add-project',jwtMiddleware,multerConfig.single('projectImage'),projectController.addProject)

//get all projects
router.get('/all-projects',jwtMiddleware,projectController.getAllProjects)

//get user projects
router.get('/user-projects',jwtMiddleware,projectController.getUserProjects)

//get home projects
router.get('/home-projects',projectController.getHomeProjects)

//edit project
router.put('/edit-project/:pId',jwtMiddleware,multerConfig.single('projectImage'),projectController.editProject)

//delete project
router.delete('/delete-project/:pId',jwtMiddleware,projectController.deleteProject)

//edit user
router.put('/edit-user',jwtMiddleware,multerConfig.single('profileImage'),userController.editUser)

//export router
module.exports=router