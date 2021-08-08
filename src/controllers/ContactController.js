const ContactModel = require("../models/ContactModel");

exports.readOne = async (id, callback) => {
  return await ContactModel.findOne({ id: id}, (err, contact) => {
    return callback(err, contact);
  });
};
exports.update = async (id, contact, callback) => {
  return await ContactModel.findOneAndUpdate(
    { id: id },
    contact,
    { useFindAndModify: false },
    (err, contact) => {
      return callback(err, contact);
    }
  );
};
