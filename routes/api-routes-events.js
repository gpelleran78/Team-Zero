var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/events", function(req, res) {
    db.Eventsdb.findAll({}).then(function(dbEvents) {
      res.json(dbEvents);
    });
  });


};
