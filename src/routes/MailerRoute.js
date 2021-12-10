import express from "express";
const router = express.Router();

import { post_email } from "../controllers/MailerController.js";

router.post("/mail", (req, res) => {
  post_email(req, (err, info) => {
    if (err && err === "ReCaptcha failed") {
      res.sendStatus(401);
    } else if (err) {
      res.sendStatus(500);
    } else {
      res.sendStatus(200);
    }
  });
});

export default router;
