const mongoose=require('mongoose')

var schema=mongoose.Schema({
    Name:String,
    Age:Number,
    Dept:String,
    Mark:Number
})
var studentModel=mongoose.model("Student",schema)
module.exports=studentModel