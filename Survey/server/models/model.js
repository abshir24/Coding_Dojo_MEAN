var mongoose = require("mongoose")
var Schema = mongoose.Schema;

var UserSchema = new mongoose.Schema({
    Name:{type:String, required: true}
},{timestamps:true})

var User = mongoose.model("User", UserSchema)

var PollsSchema = new mongoose.Schema({
    UserName:{type:String, required: true},
    Question: {type:String},
    Option1:{type:String, required:true},
    Option2:{type:String, required:true},
    Option3:{type:String, required:true},
    Option4:{type:String, required:true},
    Vote1:{type:Number, required:true},
    Vote2:{type:Number, required:true},
    Vote3:{type:Number, required:true},
    Vote4:{type:Number, required:true}
},{timestamps:true})

var Polls = mongoose.model("Polls", PollsSchema)


    
