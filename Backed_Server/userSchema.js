const mongoose =require("mongoose");
const file={
    name:String,
    description:String,
    surgery_name:String,
    city:String,
    img:String,
    rate:Number
}
const file1={
    name:String,
    email:String,
    password:String
}
const userSchema = new mongoose.Schema(file); 
const userFile = new mongoose.Schema(file1);
module.exports={userSchema,userFile};