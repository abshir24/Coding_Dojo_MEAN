var mongoose = require("mongoose")
var User = mongoose.model("User")
var Products = mongoose.model("Products")
var Bids = mongoose.model("Bids")
module.exports = {
    get_all_users: function(req,res){
        User.find({},function(err,data){
            if(err){
                console.log(err)
                res.json(err)
            }else{
                res.json(data)
            }
        })
    },

    create: function(req, res){
        console.log(req.body)
		var newUser = new User(req.body)
		newUser.save(function(err,userinfo){
			if(err){
				console.log("User create error", err)
				res.json({added: false, error: err})
			} else {
                req.session.usercreate = userinfo._id
                console.log("session create:", req.session.usercreate)
				res.json(userinfo)
			}
		})
	},

    find: function(req,res){ 
        User.findOne({Name:req.body.Name},function(err,data2){
            if(err){
                console.log("User find error",err)
                res.json(err)
            }else{
                if(data2){
                    req.session.userfind = data2._id
                    console.log("session find:", req.session.userfind)
                    res.json(data2)
                }else{
                    res.json(data2)
                } 
            }
        })
    },

    addbid1: function(req,res){
        console.log("in bid 1 add");
        Products.findOne({product:"Product 1"},function(err,product){
            console.log("product 1 exists ")
            console.log(product._id)
            console.log(req.body)
            var newBid = new Bids()
            if(!req.session.userfind){
                newBid._user = req.session.usercreate
                console.log(req.session.usercreate)
            }else{
                newBid._user = req.session.userfind
                console.log(req.session.userfind)
            }
            newBid.amount = req.body.amount
            newBid._product = product._id
            Bids.find({_product:product._id},function(err,bids){
                var condition=true;
                if(bids.length == 0){condition = true}
                else{
                    for(var i=0; i< bids.length; i++){
                        console.log("inside for loop")
                        if(newBid.amount < bids[i].amount){
                            console.log("inside condition 1")
                            condition = false;
                        }else{
                            condition = true;
                        }
                    }
                } 
                console.log(condition)
                if(condition == true){
                    newBid.save()
                    product.bids.push(newBid)
                    product.save(function(err){
                        Bids.find({_product:product._id}, function(err,bids){
                            res.json(bids)
                        })
                    })
                }
            })
        })
    },

    addbid2: function(req,res){
        console.log("in bid 2 add");
        Products.findOne({product:"Product 2"}, function(err,product){
            console.log("product 2 exists ")
            console.log(product._id)
            console.log(req.body)
            var newBid2 = new Bids()
            if(!req.session.userfind){
                newBid2._user = req.session.usercreate
                console.log(req.session.usercreate)
            }else{
                newBid2._user = req.session.userfind
                console.log(req.session.userfind)
            }
            newBid2.amount = req.body.amount
            newBid2._product = product
            Bids.find({_product:product._id},function(err,bids){
                var condition=true;
                if(bids.length == 0){condition = true}
                else{
                    for(var i=0; i< bids.length; i++){
                        console.log("inside for loop")
                        if(newBid2.amount < bids[i].amount){
                            console.log("inside condition 1")
                            condition = false;
                        }else{
                            condition = true;
                        }
                    }
                } 
                console.log(condition)
                if(condition == true){
                    newBid2.save()
                    product.bids.push(newBid2)
                    product.save(function(err){
                        Bids.find({_product:product._id}, function(err,bids){
                            res.json(bids)
                        })
                    })
                }
            }) 
        })
    },

    addbid3: function(req,res){
        console.log("in bid 3 add");
        Products.findOne({product:"Product 3"}, function(err,product){
            console.log("product 3 exists ")
            console.log(product._id)
            console.log(req.body)
            var newBid3 = new Bids()
            if(!req.session.userfind){
                newBid3._user = req.session.usercreate
                console.log(req.session.usercreate)
            }else{
                newBid3._user = req.session.userfind
                console.log(req.session.userfind)
            }
            newBid3.amount = req.body.amount
            newBid3._product = product
            Bids.find({_product:product._id},function(err,bids){
                var condition=true;
                if(bids.length == 0){condition = true}
                else{
                    for(var i=0; i< bids.length; i++){
                        console.log("inside for loop")
                        if(newBid3.amount < bids[i].amount){
                            console.log("inside condition 1")
                            condition = false;
                        }else{
                            condition = true;
                        }
                    }
                } 
                console.log(condition)
                if(condition == true){
                    newBid3.save()
                    product.bids.push(newBid3)
                    product.save(function(err){
                        Bids.find({_product:product._id}, function(err,bids){
                            res.json(bids)
                        })
                    })
                }
            }) 
        })
    },

    startBid:  function(req,res){
        Bids.remove({},function(err,data){
            if(err){
                console.log(err)
                res.json(err)
            }else{
                res.json(data)
            }
        })
    },

    logout: function(req,res){
        console.log("hitting logout controller")
        req.session.destroy(function(err){
            if(err){
                console.log(err)
                res.json(err)
            }
        })
    },

    get_bids1: function(req,res){
        Products.findOne({product:"Product 1"},function(err,product){
            Bids.find({_product:product._id},function(err,data){
               res.json(data)
            })  
        })
    },

    get_bids2: function(req,res){
        Products.findOne({product:"Product 2"},function(err,product){
            Bids.find({_product:product._id},function(err,data){
               res.json(data)
            })  
        })
    },

    get_bids3: function(req,res){
        Products.findOne({product:"Product 3"},function(err,product){
            Bids.find({_product:product._id},function(err,data){
               res.json(data)
            })  
        })
    }
}
