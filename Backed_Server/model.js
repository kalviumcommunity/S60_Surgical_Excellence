const mongoose = require("mongoose");
const userSchema = require("./userSchema")
const model = mongoose.model("user",userSchema);
module.exports=model;