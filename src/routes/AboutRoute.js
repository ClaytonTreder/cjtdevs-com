const express = require("express");
const router = express.Router();

const AboutController = require("../controllers/AboutController");

router.get("/:id", (req, res) => {
  AboutController.readOne(req.params.id, (err, about) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      res.json(about);
    }
  });
});

module.exports = router;
