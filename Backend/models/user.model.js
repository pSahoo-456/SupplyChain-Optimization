import mongoose from "mongoose";
const userScema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    travelList:{
        type:Array,
        default:[]
    }
})
export const User=mongoose.model('user',userScema)