const db = require('../models'); 

module.exports = {
    findAll: function(req, res) {
        db.Order
        .findAll({})
        .then(function (dbEvents) {
            res.json(dbEvents);
            console.log(dbEvents);
        });
    }
    
}