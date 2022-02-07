const sendEMail = require("../shared/mailer");
const {
  readOne,
  create,
  deleteOne,
} = require("./controller/NewsLetterController");
const fs = require("fs");
const path = require("path");

const handler = async function (event, context) {
  let statusCode = 500;
  try {
    switch (event.httpMethod) {
      case "POST":
        await readOne(JSON.parse(event.body).email).then(async (res) => {
          if (!res) {
            await create(JSON.parse(event.body)).then(async (res) => {
              if (res) {
                try {
                  console.log(__dirname);
                  const html = fs.readFileSync(
                    path.resolve("src/content/Emails", "NewsLetter.html"),
                    "utf-8"
                  );

                  await sendEMail({
                    to: res.newsLetter.email,
                    subject:
                      "Success - You have been sucessfully subscribed to CJT Devs' news letter",
                    html: `${html
                      .toString()
                      .replace("{%UserEmail%}", res.newsLetter.email)}`,
                  });
                  statusCode = 200;
                } catch (err) {
                  console.log(err);
                }
              }
            });
          }
        });
        break;
      case "DELETE":
        deleteOne(event.body?.email, (err) => {
          if (!err) {
            statusCode = 200;
          }
        });
        break;
      default:
        statusCode = 405;
    }
  } catch (err) {
    console.log(err);
  }
  return { statusCode: statusCode };
};

module.exports = { handler };
