const AboutModel = require("../models/AboutModel");

exports.readOne = async (id, callback) => {
  return await AboutModel.findOne({ id: id }, (err, about) => {
    return callback(err, about);
  });
};
exports.update = async (id, about, callback) => {
  return await AboutModel.findOneAndUpdate(
    { id: id },
    about,
    { useFindAndModify: false },
    (err, about) => {
      return callback(err, about);
    }
  );
};
