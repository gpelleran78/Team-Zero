const express = require("express");

const path = require("path");
const cors = require('cors'); 

const PORT = process.env.PORT || 3001;
const app = express();

const routes = require("./routes"); 
const db = require("./models");

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

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Routing (API & view)
// app.use(routes);

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});


app.listen(PORT, () => {
  console.log(`🌎 ==> Listening on port ${PORT}!`);
});

/*
// Starting the server and model sync
db.sequelize.sync(syncOptions).then(function() {
  app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});
*/