const mongoose=require("mongoose")

module.exports=function(){
    // console.log("connect",mongoose.connect("mongodb+srv://vabmanral:OS0ACrL1umRsbcpF@cluster0.qifciyn.mongodb.net/?retryWrites=true&w=majority"))
    return mongoose.connect("mongodb+srv://vabmanral:OS0ACrL1umRsbcpF@cluster0.qifciyn.mongodb.net/WorkFinder?retryWrites=true&w=majority")
}