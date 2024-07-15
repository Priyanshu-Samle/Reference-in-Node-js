import exp from "constants";
import mongoose from "mongoose"
import { type } from "os"

const teacher = mongoose.Schema({

    staff_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Staff",
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    }
});

export default  mongoose.model("Teacher",teacher)