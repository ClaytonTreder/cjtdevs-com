import { upload, getImage, deleteImage } from "../modules/s3.js";
import secured from "./shared/Secured.js";
import { Router } from "express";
const router = Router();

router.get("/:key", (req, res) => {
  getImage(req.params.key)
    .then((img) => {
      if (img) {
        res.writeHead(200, {
          "Content-Type": "image/jpeg",
          "Cache-Control": "max-age=3600",
        });
        res.write(img, "binary");
        res.end(null, "binary");
      } else {
        res.sendStatus(404);
      }
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
});

router.post("/", secured, upload.array("img", 1), (req, res) => {
  if (req.file) {
    res.sendStatus(200);
  } else {
    res.sendStatus(500);
  }
});

router.delete("/:key", secured, (req, res) => {
  deleteImage(req.params.key)
    .then(() => {
      res.sendStatus(200);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
});

export default router;
