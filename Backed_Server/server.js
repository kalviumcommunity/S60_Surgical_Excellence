const express=require("express");
const app=express();
app.get("/",(req,res)=>{
    res.redirect(req.baseUrl+"/ping")
})
app.get("/ping",(req,res)=>{
    res.send("PingPong")
})

app.post("/post",(req,res)=>{
     const name = req.body;
     res.send(name)
})
app.listen(process.env.PORT || 7777,()=>{
    console.log("Node API is running on port 7777")
})

