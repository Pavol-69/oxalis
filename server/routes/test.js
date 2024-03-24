const router = require("express").Router();
const myBDD = require("../db");
const path = require("path");
const { app } = require("electron");
const fs = require("fs");

router.get("/test1", async (req, res) => {
  try {
    //const user = await myBDD.query("SELECT * FROM testDB");
    //res.json(user);
    res.json(fs.readdirSync(path.join(`${__dirname}/../../node_modules`)));
    /*res.json(
      app.isPackaged
        ? path.join(`${__dirname}/../../`)
        : path.join(`${__dirname}/../../../client/out/BDD/testBDD.accdb`)
    );*/
  } catch (err) {
    console.error(err.message);
    res.status(500).json(err.message);
  }
});
1;
module.exports = router;
