const express = require("express");
const router = express.Router();

const ProfileController = require("../controllers/ProfileController");

router.post("/", (req, res) => {
  ProfileController.create(req.body, (err, profile) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      res.json(profile);
    }
  });
});

router.get("/", (req, res) => {
  ProfileController.read({ live: true }, (err, profile) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      res.json(profile);
    }
  });
});

router.get("/:id", (req, res) => {
  ProfileController.readOne(req.params.id, (err, profile) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      res.json(profile);
    }
  });
});

router.put("/:id", (req, res) => {
  ProfileController.update(req.params.id, req.body, (err, profile) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else if (profile) {
      res.json(profile);
    } else {
      res.sendStatus(404);
    }
  });
});

router.delete("/:id", (req, res) => {
  ProfileController.delete(req.params.id, (err) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      res.sendStatus(200);
    }
  });
});

module.exports = router;
