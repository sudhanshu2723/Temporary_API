const express=require("express")

const app=express();

app.get("/",(req,res)=>{
    return res.json({
        msg:"you are in login page"
    })
})

app.listen(3000);