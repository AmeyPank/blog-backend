const mongoose = require('mongoose')   ;
mongoose
.connect(process.env.MONGO_URI)
.then((res)=>{
    console.log("MongoDB is Connected!")
}).catch((err)=>{
console.log("Error connecting to MongoDB", err);
});