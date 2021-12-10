import express from "express";
import { sendEMail } from "../modules/mailer.js";
import { readOne, create } from "../controllers/NewsLetterController.js";
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
          sendEMail({
            to: newNewsLetter.email,
            subject:
              "Success - You have been sucessfully subscribed to CJT Devs' news letter",
            html: `<html> <body> <h3>Thank you!</h3>  <p>You have been sucessfully subscribed to CJT Devs News Letter</p><span>Be on the the look out for new and exciting things happening in not just CJT Devs' world but, in all of tech.</span>                        <footer>               <p> <small                  >Over it?                  <a href='http://dev.cjtdevs.com/user/unsubscribe?email=${newNewsLetter.email}'                    >Unsubscribe</a                  ></small                >  </p>            </footer>            </body>          </html>`,
          });
          res.sendStatus(200);
        } else {
          res.sendStatus(404);
        }
      });
    } else {
      res.sendStatus(404);
    }
  });
});

export default router;
