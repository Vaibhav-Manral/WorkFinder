const mongoose=require("mongoose")
require('dotenv').config();

module.exports=function(){
    return mongoose.connect(process.env.CONNECT_ATLAS)
}