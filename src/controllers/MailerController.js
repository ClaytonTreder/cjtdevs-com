const mailer = require("../modules/mailer");
exports.post_email = async (req, res) => {
  return await mailer.sendEMail(req.body);
};
