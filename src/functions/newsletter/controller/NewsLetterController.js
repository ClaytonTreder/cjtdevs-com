const NewsLetterModel = require("../models/NewsLetterModel.js");

async function create(newsLetter) {
  return await NewsLetterModel.create(newsLetter)
    .then((newsLetter) => {
      return { err: null, newsLetter };
    })
    .catch((err) => {
      console.log(err);
      return { err, newsLetter: null };
    });
}
async function read(query) {
  return await NewsLetterModel.find(query, (err, newsLetters) => {
    return { err, newsLetters };
  });
}
async function readOne(email) {
  return await NewsLetterModel.findOne({ email: email }, (err, newsLetter) => {
    return { err, newsLetter };
  });
}
async function update(email, newsLetter, callback) {
  return await NewsLetterModel.findOneAndUpdate(
    { email: email },
    newsLetter,
    { useFindAndModify: false },
    (err, newsLetter) => {
      return callback(err, newsLetter);
    }
  );
}
async function deleteOne(email, callback) {
  return await NewsLetterModel.findOneAndRemove(
    { email: email },
    { useFindAndModify: false },
    (err, newsLetter) => {
      if (err) return { err, newsLetter: null };
      return { err: null, newsLetter };
    }
  );
}

module.exports = { create, readOne, update, read, deleteOne };
