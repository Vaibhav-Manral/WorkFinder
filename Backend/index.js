const express=require("express");
const app=express();
const checking=require("./controllers/checking");

app.use(express.json());

app.use("/users",checking)
app.get("/infos",async(res,req)=>{
    res.status(200).send("checked")
})
module.exports=app;