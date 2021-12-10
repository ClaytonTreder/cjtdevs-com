import { update, read } from "../controllers/TextController.js";
import secured from "./shared/Secured.js";
import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  const query = req.query;
  read(query, (err, text) => {
    if (err) {
      res.sendStatus(500);
    } else if (text) {
      res.json(text);
    } else {
      res.sendStatus(404);
    }
  });
});

router.put("/", secured, (req, res) => {
  const query = req.query;
  update(query, req.body, (err, text) => {
    if (err) {
      res.sendStatus(500);
    } else if (text) {
      res.json(text);
    } else {
      res.sendStatus(404);
    }
  });
});

export default router;
