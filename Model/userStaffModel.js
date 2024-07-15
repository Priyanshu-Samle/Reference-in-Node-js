import mongoose from "mongoose";
import { type } from "os";

const userStaff = mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    course_name:{
        type:String,
        required:true
    }
})

export default mongoose.model("Staff",userStaff);