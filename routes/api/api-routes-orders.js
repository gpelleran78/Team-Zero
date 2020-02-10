
const router = require("express").Router();
// const eventsController = require("../../controllers/eventsController"); 
const db = require('../../models'); 

// Post user's order to database 
router.post("/", function(req, res){
  let email = "testlog@testlog.com"; 
  let orderLog = "test log"; 
  db.Order.create({ 
    email: email, 
    orderLog: orderLog
  }).then(function(req, res){
    res.json(dbOrder); 
    console.log(dbOrder); 
  }); 
})

// Find user's past order through their email. 
router.get("/:id", function(req, res) {
    db.Order
    .findAll({
      where: {
        email: req.params.id
      }
    })
    .then(function (dbEvents) {
        res.json(dbEvents);
        console.log(dbEvents);
    });
})

//admin find all orders in db 
router.get("/", function(req, res){
  db.Order
    .findAll({})
    .then(function (dbOrders) {
        res.json(dbOrders);
        console.log(dbOrders);
    });
})

// admin delete orders 

module.exports = router;