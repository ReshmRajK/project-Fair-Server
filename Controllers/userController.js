//register

exports.register=(req,res)=>{
    console.log('Inside Register Request!!!');
    const {userName,email,password}=req.body
    console.log(userName,email,password);
    res.status(200).json('Request Received')
}