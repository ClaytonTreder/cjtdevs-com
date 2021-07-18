const express = require("express");
const router = express.Router();

const TestimonialController = require("../controllers/TestimonialController");

router.post("/", (req, res) => {
  TestimonialController.create(req.body, (err, testimonial) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      console.log(testimonial);
      res.json(testimonial);
    }
  });
});

router.get("/", (req, res) => {
  TestimonialController.read({ live: true }, (err, testimonials) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      res.json(testimonials);
    }
  });
});

module.exports = router;
