import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    password:{
        type:String,
        required: true,
    },
    phonenumber:{
        type:String,
        required: true,
    },
    role:{
        type:String,
        required:true,
        default:"User",
    },
    status:{
        type:Boolean,
        required:true,
        default: true,
    },
},{timestamps: true})


export default mongoose.model("users",userSchema)