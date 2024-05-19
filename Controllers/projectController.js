const projects = require('../Models/projectModel')

exports.addProject = async (req, res) => {
    // console.log("Inside Add Project");
    // console.log(req.payload);
    // console.log(req.body);
    // console.log(req.file);
    const { title, language, overview, github, website } = req.body
    const userId = req.payload
    const projectImage = req.file.filename
    try {
        const existingProject = await projects.findOne({ github })
        if (existingProject) {
            res.status(406).json("This project is already available in our system,Kindly upload another!!!")
        }
        else {
            const newProject = new projects({
                title, language, overview, github, website, projectImage, userId
            })
            await newProject.save()
            res.status(200).json(newProject)
        }

    }
    catch (err) {
        res.status(401).json(err)
    }

}

//get all Projects
exports.getAllProjects=async(req,res)=>{

    //get query param(this search variable is defined in allApi)
    const searchKey=req.query.search

    //create query
    const query={
        language:{
            $regex:searchKey,$options:'i'
        }
    }

    try{
        const allProjects=await projects.find(query)
        res.status(200).json(allProjects)
    }
    catch(err){
        res.status(401).json(err)
    }
}

//get user projects
exports.getUserProjects=async(req,res)=>{
    const userId=req.payload
    try{
        const userProjects=await projects.find({userId})
        res.status(200).json(userProjects)
    }
    catch(err){
        res.status(401).json(err)
    }
}

//get Home projects
exports.getHomeProjects=async(req,res)=>{
    try{
        const homeProjects=await projects.find().limit(3)
        res.status(200).json(homeProjects)
    }
    catch(err){
        res.status(401).json(err)
    }
}

//edit project
exports.editProject=async(req,res)=>{
    // console.log("Inside edit project");
    const {pId}=req.params
    const userId=req.payload
    const { title, language, overview, github, website, projectImage } = req.body
    const uploadImage=req.file?req.file.filename:projectImage
    try{
        const updatedProject=await projects.findByIdAndUpdate({_id:pId},{
            title,language,overview,github,website,projectImage:uploadImage,userId
        },{new:true})
        await updatedProject.save()
        res.status(200).json(updatedProject)

    }
    catch(err){
        res.status(401).json(err)
    }

}

//delete project
exports.deleteProject=async(req,res)=>{
    // console.log("inside delete");
    const {pId}=req.params
    try{
        const projectDetails=await projects.findByIdAndDelete({_id:pId})
        res.status(200).json(projectDetails)

    }
    catch(err){
        res.status(401).json(err)
    }
}

