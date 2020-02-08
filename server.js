const express = require('express');
const cors = require('cors');
const db = require('./models');
const path = require('path'); 

const app = express();
const PORT = process.env.PORT || 8080;

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



// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}


require("./routes/api-routes-drinks")(app); 
require("./routes/api-routes-drinks")(app); 
require("./routes/api-routes-users")(app); 

app.use(express.static("client/build")); 

//Starting the server after model sync
// db.sequelize
//   .sync({ force: true })
//   .then(function () {
//     app.listen(PORT, () => {
//       console.log(`🌎 ==> Listening on port ${PORT}!`);
//     });
//   });



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


/*
app.use(express.static(path.join(__dirname, 'client/build'))); 

// Routing (API & view)
// app.use(routes);
require("./routes/api-routes-drinks")(app); 
require("./routes/api-routes-drinks")(app); 
require("./routes/api-routes-users")(app); 

*/