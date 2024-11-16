const mongoose=require("mongoose");

const userSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        minlength:3,
        maxlength:50,
    },
    lastName:{
        type:String,
        minlength:3,
        maxlength:50,
    },
    email:{
        type:String,
        required:true,
        lowercase:true,
        unique:true,
        trim:true,
    },
    password:{
        type:String,
    },
    age:{
        type:Number,
        min:18,
    },
    gender:{
        type:String,
        validate(value){
            if(!["male","female","other"].includes(value.lowercase)){
                throw new Error("Gender not valid");
            }
        }
    },
    photoUrl:{
        type:String,
        default:"https://th.bing.com/th/id/OIP.Gfp0lwE6h7139625a-r3aAHaHa?rs=1&pid=ImgDetMain",
    },
    about:{
        type:String,
        default:"This is your default about you"
    },
    skills:{
        type:[String],
    }
    
},{
    timestamps:true,
});

module.exports=mongoose.model("User",userSchema);