const db = require('../models');

module.exports = {
    findAll: function (req, res) {
        db.Eventdb
            .findAll({})
            .then(function (dbEvents) {
                res.json(dbEvents);
                console.log(dbEvents);
            });
    }
    // findById: function(req, res) {
    //     console.log("findById from events controller")
    // }, 
    // create: function(req, res) {
    //     console.log("create from events controller")
    // },
    // update: function(req, res) {
    //     console.log("update from events controller")
    // }, 
    // remove: function(req, res) {
    //     console.log("remove from events controller")
    // }

};