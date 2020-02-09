const router = require("express").Router();
const ordersController = require("../../controllers/ordersController");

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(ordersController.findAll); 

module.exports = router;
