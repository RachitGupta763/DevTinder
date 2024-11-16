const mongoose = require("mongoose");

const connectDB = async() =>{
    await mongoose.
    connect("mongodb+srv://rachitgupta763:fCpYSl0HSYZr9Vb7@cluster0.9wlc2.mongodb.net/DevTinder");

};


module.exports=connectDB;