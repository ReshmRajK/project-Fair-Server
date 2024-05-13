const mongoose = require('mongoose')

mongoose.connect(process.env.CONNECTION_STRING).then(
    result => {
        console.log("MongoDb Atlas Connected with pfServer");
    }
).catch(err => {
    console.log("Connection failed");
    console.log(err);
})
