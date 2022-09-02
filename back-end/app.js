// DEPENDENCIES
const cors = require("cors");
const express = require("express");
const metaController = require("./controllers/metaController");

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json());

// ROUTES
app.get("/", (req, res) => {
  res.send("META MMA");
});

app.use("/meta", metaController);

// EXPORT
module.exports = app;
