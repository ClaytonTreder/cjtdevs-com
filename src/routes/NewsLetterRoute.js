import express from "express";
import { sendEMail } from "../modules/mailer.js";
import {
  readOne,
  create,
  deleteOne,
} from "../controllers/NewsLetterController.js";
import fs from "fs";
import path from "path";
const router = express.Router();

router.post("/", (req, res) => {
  readOne(req.body.email, (err, newsLetter) => {
    if (err) {
      res.sendStatus(500);
    } else if (!newsLetter) {
      create(req.body, (err, newNewsLetter) => {
        if (err) {
          res.sendStatus(500);
        } else if (newNewsLetter) {
          fs.readFile(
            path.resolve("src/Emails", "NewsLetter.html"),
            (err, html) => {
              if (err) {
                console.log(err);
                res.sendStatus(500);
              } else {
                sendEMail({
                  to: newNewsLetter.email,
                  subject:
                    "Success - You have been sucessfully subscribed to CJT Devs' news letter",
                  html: html
                    .toString()
                    .replace("{%UserEmail%}", newNewsLetter.email),
                });
                res.sendStatus(200);
              }
            }
          );
        } else {
          res.sendStatus(404);
        }
      });
    } else {
      res.sendStatus(404);
    }
  });
});

router.delete("/:email", (req, res) => {
  deleteOne(req.params.email, (err) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.sendStatus(200);
    }
  });
});
export default router;
