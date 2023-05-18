const userSchema=require("../models/model");
const express=require("express");
const router=express.Router();
// const User=require("../models/model.js")

router.post("",async(req,res)=>{
    // console.log(req.body)
    try{
        const info=await userSchema.create(req.body); 
        //if u don't use await postman return => {}(this curly brackets).
        return res.status(201).send(info);
    }
    catch(err){
        return res.status(500).send(err.message);
    }
})


router.get("",async(req,res)=>{
    // console.log(req.body)
    try{
        const data= await userSchema.find().lean().exec()
        console.log(data)
        //if u don't use await postman return => {}(this curly brackets).
        // return res.status(201).send(info);
        return res.status(201).send(data);
    }
    catch(err){
        console.log(err.message);
        return res.status(500).send(err.message);
    }
})

module.exports=router;