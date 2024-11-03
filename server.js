const express = require("express")
require("dotenv").config();

const app = express();
const port = process.env.PORT || 8000;

app.get("/",(req,res)=>{
    return res.status(200).json({message : "Cloud Run and Cloud Build Demo - CI CD Pipeline", status:process.env.TRIAL })
})

app.get("/echo/:text",(req,res)=>{
    const {text}  = req.params;
    return res.status(200).json({message : "Echo Route",data : text})
})

app.listen(port,()=>{
    console.log(`server listening on port ${port}`)
});