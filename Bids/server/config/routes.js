var controller = require("./../controllers/controller.js")


module.exports = function(app){
    app.get("/users",controller.get_all_users)
    app.post("/create",controller.create)
    app.post('/find',controller.find)
    app.post('/addbid1',controller.addbid1)
    app.post('/addbid2',controller.addbid2)
    app.post('/addbid3',controller.addbid3)
    app.get('/startbid', controller.startBid)
    app.get('/logout', controller.logout)
    app.get('/getbids1', controller.get_bids1)
    app.get('/getbids2', controller.get_bids2)
    app.get('/getbids3', controller.get_bids3)
}