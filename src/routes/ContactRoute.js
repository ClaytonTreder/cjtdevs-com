const express = require("express");
const router = express.Router();

const ContactController = require("../controllers/ContactController");

router.get("/:id", (req, res) => {
  ContactController.readOne(req.params.id, (err, contact) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      res.json(contact);
    }
  });
});

module.exports = router;
