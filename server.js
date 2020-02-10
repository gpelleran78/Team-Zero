const express = require('express');
const cors = require('cors');

const routes = require("./routes"); 
const db = require('./models');

const app = express();
const PORT = process.env.PORT || 3002;

// Middleware Functions 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(cors()); 
//enables cors
app.use(cors({
  'allowedHeaders': ['sessionId', 'Content-Type'],
  'exposedHeaders': ['sessionId'],
  'origin': '*',
  'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
  'preflightContinue': false
}));


app.use(routes); 

// require("./routes/api-routes-orders")(app); 
// require("./routes/api-routes-events")(app); 

// app.use(express.static("client/build")); 
 
//Starting the server after model sync
db.sequelize
  .sync({ force: false })
  .then(function () {
    console.log(__dirname); 
    app.listen(PORT, () => {
      console.log(`🌎 ==> Listening on port ${PORT}!`);
    });
  });



// Add headers
// app.use(function (req, res, next) {
//   ​
//       // Website you wish to allow to connect
//       res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
//   ​
//       // Request methods you wish to allow
//       res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
//   ​
//       // Request headers you wish to allow
//       res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
//   ​
//       // Set to true if you need the website to include cookies in the requests sent
//       // to the API (e.g. in case you use sessions)
//       res.setHeader('Access-Control-Allow-Credentials', true);
//   ​
//       // Pass to next layer of middleware
//       next();
//   });



