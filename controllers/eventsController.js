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
};