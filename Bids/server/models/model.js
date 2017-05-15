var mongoose = require("mongoose")
var Schema = mongoose.Schema;

var UserSchema = new mongoose.Schema({
    Name:{type:String, required: true},
    products:[{type:Schema.Types.ObjectId, ref:'Products'}],
    bids: [{type:Schema.Types.ObjectId, ref: 'Bids'}],
},{timestamps:true})

var User = mongoose.model("User", UserSchema)

var ProductsSchema = new mongoose.Schema({
    bids:[{type:Schema.Types.ObjectId, ref:'Bids'}],
    product:{type:String, required:true},  
},{timestamps:true})

var Products = mongoose.model("Products", ProductsSchema)
var product1 = new Products({product:"Product 1"});
var product2 = new Products({product:"Product 2"});
var product3 = new Products({product:"Product 3"});
Products.findOne({product: "Product 1"},function(err, data){
    if(err){
        console.log(err)
        res.json(err)
    }else{
        if(data == null){
            console.log("product does not exist")
            product1.save()
        }
    }
})

Products.findOne({product: "Product 3"},function(err, data){
    if(err){
        console.log(err)
        res.json(err)
    }else{
        if(data == null){
            console.log("product does not exist")
            product2.save()
        }
    }
})

Products.findOne({product: "Product 2"},function(err, data){
    if(err){
        console.log(err)
        res.json(err)
    }else{
        if(data == null){
            console.log("product does not exist")
            product3.save()
        }
    }
})

var BidsSchema = new mongoose.Schema({
    _user:{type:Schema.Types.ObjectId, ref:'User'},
    _product:{type:Schema.Types.ObjectId, ref:'Products'},
    amount:{type:Number, required:true},
},{timestamps:true})

var Bids = mongoose.model("Bids", BidsSchema)

