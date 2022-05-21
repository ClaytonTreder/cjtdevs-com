const sendEMail = require("../shared/mailer");
const axios = require("axios");
const handler = async function (event, context) {
  let statusCode = 500;
  switch (event.httpMethod) {
    case "POST":
      await axios({
        method: "POST",
        url: `https://www.google.com/recaptcha/api/siteverify?secret=${
          process.env.RE_SECRET
        }&response=${JSON.parse(event.body).token}`,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      })
        .then(async (verification) => {
          if (verification.data.success) {
            await sendEMail(JSON.parse(event.body));
            statusCode = 200;
          } else {
            statusCode = 401;
          }
        })
        .catch((err) => {
          console.log(err);
        });
      break;
  }
  return { statusCode };
};

module.exports = { handler };
