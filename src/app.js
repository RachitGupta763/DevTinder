const express=require("express");
const connectDB = require("./config/database");
const app=express();
 
const cookieParser = require("cookie-parser");
const requestRouter = require("./router/request");
const authRouter = require("./router/auth");
const profileRouter = require("./router/profile");


app.use(cookieParser());
app.use(express.json());


app.use("/",authRouter);
app.use("/",requestRouter);
app.use("/",profileRouter)


// //find user by email
// app.get("/user", async(req,res) =>{
//     const userEmail = req.body.email;

//     try{
//         //adding a new instance of user
//         const users= await User.find({email:userEmail});
//         if(users.length === 0){
//             res.status(400).send("User Not Found");
//         }
//         else{
//             res.send(users);
//         }
//     }catch(err){
//         res.status(400).send("Something went wrong");
//     }

// });

// // feed Api - get all user 
// app.get("/feed", async(req,res) =>{
      
//     try{
//         const allUser = await User.find({});
//         res.send(allUser);
//     }catch(err){
//         res.status(400).send("Something went wrong");
//     }
// });

// app.delete("/deleteUser", async(req,res) =>{
//     const _id=req.body._id

//     try{
//         const user = await User.findByIdAndDelete({_id:_id});
//         res.send("Deleted Successfully");
//     }catch(err){
//         res.status(400).send("Something went wrong");
//     }

// });

// app.patch("/update/:_id", async(req,res) =>{
//     const userid=req.params?._id;
//     const data=req.body;
    
    
//     try{
//         const AllowedDatatoUpdate = [
//             "photoUrl",
//             "gender",
//             "about",
//             "age",
//             "skills"
//         ];

//         const invalidData = Object.keys(data).every((val) =>
//             AllowedDatatoUpdate.includes(val)
//         );
//         console.log(invalidData);

//         if(!invalidData){
//             throw new Error("Invalid data");
//         }
//         if(data?.skills?.length > 10){
//             throw new Error("Skills cannot more than 10");
//         }
        
//         const user = await User.findByIdAndUpdate(userid,data,{
//             returnDocument: "after",
//             runValidators:true,
//         });
//         console.log(user);
//         res.send("user updated Successfully");
//     }catch(err){
//         res.status(400).send("Error :" + err.message);
//     }

// })

connectDB().then(() =>{
        console.log("Database Connected Successfully");
        app.listen(7771,()=>{
            console.log("Sever is running at Port 7771");
        });
    })
    .catch((err) =>{
        console.log("Database Connected Unsuccessfully");
    })




