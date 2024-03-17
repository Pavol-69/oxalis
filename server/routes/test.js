const router = require("express").Router();

router.get("/test1", async (req, res) => {
  try {
    res.json("pikachu");
  } catch (err) {
    console.error(err.message);
    res.status(500).json("Erreur serveur.");
  }
});

module.exports = router;