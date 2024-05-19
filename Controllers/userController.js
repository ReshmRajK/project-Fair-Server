const users = require('../Models/userModel')
const jwt=require('jsonwebtoken')

//register
exports.register = async (req, res) => {
    // console.log('Inside Register Request!!!');
    const { userName, email, password } = req.body
    // console.log(userName, email, password);

    try {
        //Check email is present or not in DB
        const existingUser = await users.findOne({ email })
        //If email is present then existing user
        if (existingUser) {
            res.status(406).json('User is Already exists!!!')

        }
        //else store/insert the data to DB
        else {
            const newUser = new users({
                userName, email, password,
                github: "", linkedin: "", profile: ""
            })
            //to store the data to mongodb from mongoose model
            await newUser.save()
            res.status(200).json(newUser)

        }
    }
    catch (err) {
        res.status(400).json(err)
    }
}

//login
exports.login=async(req,res)=>{
    // console.log("Inside login function!!!");

    //get email,password from request body
    const {email,password}=req.body
    // console.log(email,password);

    try{
        const existingUser=await users.findOne({email,password})
        if(existingUser){
            //user can login
            //generate token
            const token=jwt.sign({userId:existingUser._id},process.env.JWT_SECRET)

            res.status(200).json({
                existingUser,
                token
            })

        }
        else{
            res.status(404).json("Invalid Email or Password")
        }

    }
    catch(err){
        res.status(406).json(err)
    }

}

//edit user
exports.editUser=async(req,res)=>{
    const userId=req.payload
    const { userName, email, password,github,linkedin,profileImage } = req.body
    const profile=req.file?req.file.filename:profileImage

    try{
        const updateUser=await users.findByIdAndUpdate({_id:userId},{
            userName,email,password,github,linkedin,profile
        },{new:true})
        await updateUser.save()
        res.status(200).json(updateUser)

    }
    catch(err){
        res.status(401).json(err)
    }
}