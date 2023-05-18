const express=require("express");
const app=express();
const checking=require("./controllers/checking");

app.get("/infos",async(res,req)=>{
    res.status(200).send("checked")
})

app.use(express.json());

app.use("/users",checking)

module.exports=app;