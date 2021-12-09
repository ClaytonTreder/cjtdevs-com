const NewsLetterModel = require("../models/NewsLetterModel");

exports.create = async (newsLetter, callback) => {
  return await NewsLetterModel.create(newsLetter)
    .then((newsLetter) => {
      callback(null, newsLetter);
    })
    .catch((err) => {
      callback(err, null);
    });
};
exports.read = async (query, callback) => {
  return await NewsLetterModel.find(query, (err, newsLetters) => {
    return callback(err, newsLetters);
  });
};
exports.readOne = async (email, callback) => {
  return await NewsLetterModel.findOne({ email: email }, (err, newsLetter) => {
    return callback(err, newsLetter);
  });
};
exports.update = async (email, newsLetter, callback) => {
  return await NewsLetterModel.findOneAndUpdate(
    { email: email },
    newsLetter,
    { useFindAndModify: false },
    (err, newsLetter) => {
      return callback(err, newsLetter);
    }
  );
};
exports.delete = async (email, callback) => {
  return await NewsLetterModel.findOneAndRemove(
    { email: email },
    { useFindAndModify: false },
    (err, newsLetter) => {
      if (err) return callback(err, null);
      return callback(null, newsLetter);
    }
  );
};
