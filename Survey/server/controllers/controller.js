var mongoose = require("mongoose")
var User = mongoose.model("User")
var Polls = mongoose.model("Polls")


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
                req.session.usercreate = userinfo.Name
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
                    req.session.userfind = data2.Name
                    console.log("session find:", req.session.userfind)
                    res.json(data2)
                }else{
                    res.json(data2)
                } 
            }
        })
    },

     createpoll: function(req,res){
        console.log(req.session.userfind)
        console.log(req.session.usercreate)
        console.log("createpoll controller")
        console.log("**********************************")
        console.log("poll info:", req.body)
		var newPoll = new Polls()
        newPoll.Question = req.body.Question
        newPoll.Option1 = req.body.Option1
        newPoll.Option2 = req.body.Option2
        newPoll.Option3 = req.body.Option3
        newPoll.Option4 = req.body.Option4  
        newPoll.Vote1 = 0;   
        newPoll.Vote2 = 0;
        newPoll.Vote3 = 0;
        newPoll.Vote4 = 0;           
        if(!req.session.userfind){
                newPoll.UserName = req.session.usercreate
                console.log(req.session.usercreate)
            }else{
                newPoll.UserName = req.session.userfind
                console.log(req.session.userfind)
            }
		newPoll.save(function(err){
            Polls.find({}, function(err,polls){
                res.json(polls)
            })
        })
    },

    getpolls: function(req,res){
        Polls.find({},function(err,data){
            if(err){
                console.log(err)
                res.json(err)
            }else{
                res.json(data)
            }
        })
    },

    delete: function(req,res){
        Polls.remove({_id: req.params.id}, function(err){
            if(err){console.log("Polldelete error", err)}
            res.json(true)
        })
    },

    findpoll: function(req,res){
        console.log("inside find poll controller")
        Polls.findOne({_id: req.params.id},function(err,poll){
            if(err){
                console.log(err)
                res.json(err)
            }else{
                console.log(poll)
                res.json(poll)
            }
        })
    },

    getstringpolls:  function(req,res){
        Polls.find({},function(err,data){
            if(err){
                console.log(err)
                res.json(err)
            }else{
                data = data.Question
                res.json(data)
            }
        })
    },

    addVotes1: function(req,res){
        console.log("Hitting votes 1")
        Polls.findOne({_id:req.params.id},function(err,data){
            data.Vote1 = data.Vote1 + 1
            data.save(function(err){
                Polls.find({}, function(err,polls){
                    res.json(polls)
                })
            })
        })
    },

    addVotes2: function(req,res){
        console.log("Hitting votes 2 ")
        Polls.findOne({_id:req.params.id},function(err,data){
            data.Vote2 = data.Vote2 + 1
            data.save(function(err){
                Polls.find({}, function(err,polls){
                    res.json(polls)
                })
            })
        })
    },

    addVotes3: function(req,res){
        console.log("Hitting votes 3")
        Polls.findOne({_id:req.params.id},function(err,data){
            data.Vote3 = data.Vote3 + 1
            data.save(function(err){
                Polls.find({}, function(err,polls){
                    res.json(polls)
                })
            })
        })
    },

    addVotes4: function(req,res){
        console.log("Hitting votes 4 ")
        Polls.findOne({_id:req.params.id},function(err,data){
            data.Vote4 = data.Vote4 + 1
            data.save(function(err){
                Polls.find({}, function(err,polls){
                    res.json(polls)
                })
            })
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

    
}
