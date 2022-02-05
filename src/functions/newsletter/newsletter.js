import { sendEMail } from "../shared/mailer.js";
import { readOne, create, deleteOne } from "./NewsLetterController.js";
import fs from "fs";
import path from "path";

const sendEMail = require("../shared/mailer").sendEMail;
const {
  readOne,
  create,
  deleteOne,
} = require("./controller/NewsLetterController");
const fs = require("fs");
const path = require("path");

const handler = async function (event, context) {
  switch (event.httpMethod) {
    case "POST":
      return readOne(event.body.email, (err, newsLetter) => {
        if (err) {
          return { status: 500 };
        } else if (!newsLetter) {
          create(event.body, (err, newNewsLetter) => {
            if (err) {
              return { status: 500 };
            } else if (newNewsLetter) {
              fs.readFile(
                path.resolve("src/content/Emails", "NewsLetter.html"),
                (err, html) => {
                  if (err) {
                    console.log(err);
                    return { status: 500 };
                  } else {
                    sendEMail({
                      to: newNewsLetter.email,
                      subject:
                        "Success - You have been sucessfully subscribed to CJT Devs' news letter",
                      html: html
                        .toString()
                        .replace("{%UserEmail%}", newNewsLetter.email),
                    });
                    return { status: 200 };
                  }
                }
              );
            } else {
              return { status: 404 };
            }
          });
        } else {
          return { status: 404 };
        }
      });
    case "DELETE":
      return deleteOne(event.params.email, (err) => {
        if (err) {
          res.sendStatus(500);
        } else {
          res.sendStatus(200);
        }
      });
    default:
      return { status: 405 };
  }
};

module.exports = { handler };
