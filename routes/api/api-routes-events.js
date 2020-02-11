const router = require("express").Router();
// const eventsController = require("../../controllers/eventsController"); 
const db = require('../../models'); 

router.get("/", function(req, res) {
    db.Eventdb
    .findAll({})
    .then(function (dbEvents) {
        res.json(dbEvents);
        console.log(dbEvents);
    });
})

module.exports = router;
