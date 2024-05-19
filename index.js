
//Load .env file content into process.env by default.
require('dotenv').config()
const express=require('express')
const cors=require('cors')
const router=require('./Routes/router')
require('./DB/connection')

//Creates an express application
const pfServer=express()

//use cors in express server
pfServer.use(cors())
pfServer.use(express.json())
pfServer.use(router)
pfServer.use('/uploads',express.static('./uploads'))

//ser up port
const PORT=3000 || process.env.PORT

pfServer.listen(PORT,()=>{
    console.log(`Project Fair server started at port number ${PORT}`);
})

//http://localhost:3000/
pfServer.get('/',(req,res)=>{
    res.status(200).send(`<h1 style="color:red">Project Fair server started and waiting for request</h1>`)
})
