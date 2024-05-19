const jwt=require('jsonwebtoken')

const jwtMiddleware=(req,res,next)=>{

    // console.log("Inside JWT middleware");

    //get verify token
    const token=req.headers["authorization"].split(" ")[1]
    if(token){
        // console.log(token);

        //steps verify token
       try{ 
        const jwtResponse=jwt.verify(token,process.env.JWT_SECRET)
        // console.log(jwtResponse);
        //to access the user id for identify which is add the project
        req.payload=jwtResponse.userId
        next()
    }
    catch(err){
        res.status(401).json("Authorization failed...Please login!!!")
    }
    }
    else{
        res.status(406).json("Please provide token")
    }

}

module.exports=jwtMiddleware