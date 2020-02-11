const path = require("path");
const router = require("express").Router();
// const apiRoutes = require("./api"); 

const apiRoutesEvents = require("./api/api-routes-events"); 
const apiRoutesOrders = require("./api/api-routes-orders"); 

// API Routes
router.use("/api/events", apiRoutesEvents);
router.use("/api/orders", apiRoutesOrders); 

//If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
