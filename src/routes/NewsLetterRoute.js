const express = require("express");
const router = express.Router();
const mailer = require("../modules/mailer");
const NewsLetterController = require("../controllers/NewsLetterController");

router.post("/", (req, res) => {
  NewsLetterController.readOne(req.body.email, (err, newsLetter) => {
    if (err) {
      res.sendStatus(500);
    } else if (!newsLetter) {
      NewsLetterController.create(req.body, (err, newNewsLetter) => {
        if (err) {
          res.sendStatus(500);
        } else if (newNewsLetter) {
          mailer.sendEMail({
            to: newNewsLetter.email,
            subject: `Success`,
            text: "You have been sucessfully subscribed to CJT Devs' news letter. Don't worry we won't send you too much!",
          });
          res.sendStatus(200);
        } else {
          console.log(newNewsLetter);
          res.sendStatus(404);
        }
      });
    } else {
      console.log(404);
      res.sendStatus(404);
    }
  });
});

module.exports = router;
