const router = require("express").Router();
// const eventsController = require("../../controllers/eventsController"); 
const db = require('../../models'); 

// // Matches with "/api/books"
// router.route("/")
//   .get(eventsController.findAll)
//   .post(eventsController.create);

// // Matches with "/api/books/:id"
// router
//   .route("/:id")
//   .get(eventsController.findById)
//   .put(eventsController.update)
//   .delete(eventsController.remove);

router.get("/", function(req, res) {
    db.Eventdb
    .findAll({})
    .then(function (dbEvents) {
        res.json(dbEvents);
        console.log(dbEvents);
    });
})
module.exports = router;
