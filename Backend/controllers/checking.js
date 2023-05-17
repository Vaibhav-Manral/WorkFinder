const userSchema=require("../models/model");
const express=require("express");
const router=express.Router();

router.post("",async(req,res)=>{
    // console.log(req.body)
    try{
        const info=await userSchema.create(req.body); //if u don't use await postman return => {}(this curly brackets).
        return res.status(201).send(info);
    }
    catch(err){
        return res.status(500).send(err.message);
    }
})

module.exports=router;