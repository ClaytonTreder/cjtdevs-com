import { updateOne, create, readOne } from "../controllers/TextController.js";
import secured from "./shared/Secured.js";
import express from "express";
const router = express.Router();

router.get("/:id", (req, res) => {
  const id = req.params.id;
  readOne(id, (err, text) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else if (text) {
      res.json(text);
    } else {
      res.sendStatus(404);
    }
  });
});

router.put("/:id", (req, res) => {
  const id = req.params.id;
  updateOne(id, req.body, (err, text) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else if (text) {
      res.json(text);
    } else {
      res.sendStatus(404);
    }
  });
});

router.post("/", (req, res) => {
  create(req.body, (err, text) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else if (text) {
      res.json(text);
    } else {
      res.sendStatus(404);
    }
  });
});

export default router;
