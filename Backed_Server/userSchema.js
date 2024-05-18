const mongoose =require("mongoose");
const file={
    name:String,
    description:String,
    surgery_name:String,
    city:String,
    img:String,
    rate:Number
}
const userSchema = new mongoose.Schema(file); 
module.exports=userSchema;