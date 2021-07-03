const express = require("express");
const router = express.Router();

const mailerController = require("../controllers/MailerController");

router.post("/mail", (req, res) => {
  mailerController.post_email(req, res).then((err) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.sendStatus(200);
    }
  });
});

module.exports = router;
