
import express from "express"
import Teacher from "../Model/teacherModel.js"
import Staff from "../Model/userStaffModel.js"

const app = express();

export const create = async(req,res)=>{
      
    try {
        const {email} = req.body;

        const userExsist = await Teacher.findOne({email});

        if(userExsist){
            return res.status(400).json("User is already exsist");
        }

        const user = new Teacher(req.body);
        const save = await user.save();

        return res.status(200).json(save)
    } catch (error) {
        console.log(error);
        return res.status(500).json({message:error});
        
    }
}

export const staffCreate = async(req,res)=>{

    try {
        const staff = new Staff(req.body);

        const save = await staff.save();
        return res.status(200).json(save);
    } catch (error) {
        return res.status(500).json({message:error});
    }
}

export const readTeacher = async(req,res)=>{
    try {
        const {staff_id} = req.body;
        const user = await Teacher.findOne({staff_id}).populate('staff_id');

        return res.status(200).json(user);
    } catch (error) {
        console.log(error);
        return res.status(500).json(error)
    }
}