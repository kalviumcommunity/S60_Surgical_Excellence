const mongoose = require("mongoose");
const {userSchema,userFile} = require("./userSchema")
const model = mongoose.model("detail",userFile)
const file = mongoose.model("user",userSchema);
module.exports={file:file,model:model}