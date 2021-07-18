const express = require("express");
const router = express.Router();

const mailerController = require("../controllers/MailerController");

router.post("/mail", (req, res) => {
  mailerController.post_email(req, (err, info) => {
    if (err && err === "ReCaptcha failed") {
      res.sendStatus(401);
    } else if (err) {
      res.sendStatus(500);
    } else {
      res.sendStatus(200);
    }
  });
});

module.exports = router;
