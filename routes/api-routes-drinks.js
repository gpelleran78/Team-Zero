var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/drinks", function(req, res) {
    db.Drinks.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

};
