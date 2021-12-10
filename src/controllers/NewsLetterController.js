import NewsLetterModel from "../models/NewsLetterModel.js";

export async function create(newsLetter, callback) {
  return await NewsLetterModel.create(newsLetter)
    .then((newsLetter) => {
      callback(null, newsLetter);
    })
    .catch((err) => {
      callback(err, null);
    });
}
export async function read(query, callback) {
  return await NewsLetterModel.find(query, (err, newsLetters) => {
    return callback(err, newsLetters);
  });
}
export async function readOne(email, callback) {
  return await NewsLetterModel.findOne({ email: email }, (err, newsLetter) => {
    return callback(err, newsLetter);
  });
}
export async function update(email, newsLetter, callback) {
  return await NewsLetterModel.findOneAndUpdate(
    { email: email },
    newsLetter,
    { useFindAndModify: false },
    (err, newsLetter) => {
      return callback(err, newsLetter);
    }
  );
}
export async function deleteOne(email, callback) {
  return await NewsLetterModel.findOneAndRemove(
    { email: email },
    { useFindAndModify: false },
    (err, newsLetter) => {
      if (err) return callback(err, null);
      return callback(null, newsLetter);
    }
  );
}
