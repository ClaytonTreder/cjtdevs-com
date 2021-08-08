const express = require("express");
const router = express.Router();
const mailer = require("../modules/mailer");
const ContactController = require("../controllers/ContactController");
const AboutController = require("../controllers/AboutController");

const secured = (req, res, next) => {
  if (req.user) {
    return next();
  }
  mailer
    .sendEMail({
      to: "info@cjtdevs.com",
      subject: `Someone tried to access an Admin route (secured route) and failed.`,
      text: req.url,
    })
    .finally(() => {
      res.json(null);
    });
};

router.get("/contact/:id", secured, (req, res) => {
  ContactController.readOne(req.params.id, (err, contact) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      res.json(contact);
    }
  });
});

router.put("/contact/:id", secured, (req, res) => {
  ContactController.update(req.params.id, req.body, (err, contact) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else if (contact) {
      res.json(contact);
    } else {
      res.sendStatus(404);
    }
  });
});

router.get("/about/:id", secured, (req, res) => {
  AboutController.readOne(req.params.id, (err, about) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      res.json(about);
    }
  });
});

router.put("/about/:id", secured, (req, res) => {
  AboutController.update(req.params.id, req.body, (err, about) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else if (about) {
      res.json(about);
    } else {
      res.sendStatus(404);
    }
  });
});

module.exports = router;
