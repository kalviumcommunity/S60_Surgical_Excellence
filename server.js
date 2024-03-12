const express=require("express");
const app=express();
app.get("/",(req,res)=>{
    res.redirect(req.baseUrl+"/ping")
})
app.get("/ping",(req,res)=>{
    res.send("PingPong")
})
app.listen(3000,()=>{
    console.log("Node API is running on port 3000")
})