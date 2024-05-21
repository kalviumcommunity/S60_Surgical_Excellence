const mongoose =require("mongoose");
const file={
    name:String,
    description:String,
    surgery_name:String,
    city:String,
    img:String,
    rate:Number,
    Added_by:String
}
const file1={
    name:String,
    email:String,
    password:String,
    token: String
}
const userSchema = new mongoose.Schema(file); 
const userFile = new mongoose.Schema(file1);
module.exports={userSchema,userFile};