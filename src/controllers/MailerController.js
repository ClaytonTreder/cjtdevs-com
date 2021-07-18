const mailer = require("../modules/mailer");
const axios = require("axios");
exports.post_email = async (req, callback) => {
  axios({
    method: "POST",
    url: `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RE_SECRET}&response=${req.body.token}`,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  })
    .then(async (verification) => {
      if (verification.data.success) {
        (await mailer.sendEMail(req.body))
          ? callback(null, true)
          : callback("Mailer error", null);
      } else {
        callback("ReCaptcha failed", null);
      }
    })
    .catch((err) => {
      callback(err, null);
    });
};
