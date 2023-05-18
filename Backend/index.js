const express=require("express");
const app=express();
const checking=require("./controllers/checking");



app.use(express.json());

app.use("/users",checking)
app.use("/infos",checking)

module.exports=app;