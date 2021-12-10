import express from "express";
const router = express.Router();

import { readOne } from "../controllers/ContactController.js";

router.get("/:id", (req, res) => {
  readOne(req.params.id, (err, contact) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      res.json(contact);
    }
  });
});

export default router;
