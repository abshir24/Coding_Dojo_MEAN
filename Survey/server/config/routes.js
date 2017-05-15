var controller = require("./../controllers/controller.js")


module.exports = function(app){
    app.get("/users",controller.get_all_users)
    app.post("/create",controller.create)
    app.post('/find',controller.find)
    app.post('/createpoll', controller.createpoll)
    app.get('/getpolls',controller.getpolls),
    app.delete("/delete/:id",controller.delete)
    app.get("/findpoll/:id", controller.findpoll)
    app.get("/addvote1/:id",controller.addVotes1)
    app.get("/addvote2/:id",controller.addVotes2)
    app.get("/addvote3/:id",controller.addVotes3)
    app.get("/addvote4/:id",controller.addVotes4)
    app.get("/logout", controller.logout)
}