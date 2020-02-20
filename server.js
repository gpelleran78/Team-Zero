const express = require('express');
const cors = require('cors');
const path = require('path'); 
const routes = require("./routes"); 
const db = require('./models');

const app = express();
const PORT = process.env.PORT || 3001;

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


if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}; 


app.use(routes); 

app.get('/*', function (req, res) {
  
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

const syncOptions = { force: false }; 


 syncOptions.force = false;
//Starting the server after model sync
db.sequelize
  .sync(syncOptions)
  .then(function () {
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



