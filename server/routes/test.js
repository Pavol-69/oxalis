const router = require("express").Router();
const myBDD = require("../db");

router.get("/test1", async (req, res) => {
  try {
    const user = await myBDD.query("SELECT * FROM testDB")
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).json("Erreur serveur.");
  }
});

module.exports = router;