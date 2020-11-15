const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
//----------------------------------------- END OF IMPORTS---------------------------------------------------

const db = "mongodb://localhost:27017/code";
mongoose.connect(
    db,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("Mongoose Is Connected");
  }
);

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:3000", // <-- location of the react app were connecting to
    credentials: true,
  })
);


//----------------------------------------- END OF MIDDLEWARE---------------------------------------------------

const router = express.Router();
app.use('/', router);
require(__dirname + '/controllers/index.js')(router);

//Start Server
const port = 8800;
app.listen(port, () => {
  console.log("Server Has Started");
});