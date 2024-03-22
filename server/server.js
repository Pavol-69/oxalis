const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const path = require("path");
const bcrypt = require("bcryptjs");
const saltRounds = 10;
module.exports.bcrypt = bcrypt;

const PORT = process.env.PORT || 5000;

// Middlewear
app.use(express.json()); //req.body
app.use(cors());

// Routes
// Connexion + Inscription
app.use("/test", require("./routes/test"));

/*app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "client/build/index.html"), function (err) {
    if (err) {
      res.status(500).send(err);
    }
  });
});*/

app.listen(PORT, () => {
  console.log("Le serveur fonctionne sur le port " + PORT);
});
