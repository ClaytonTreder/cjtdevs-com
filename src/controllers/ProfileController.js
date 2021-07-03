const ProfileModel = require("../models/ProfileModel");
const axios = require("axios");
exports.create = async (profile, callback) => {
  return await ProfileModel.create(profile)
    .then((profile) => {
      callback(null, profile);
    })
    .catch((err) => {
      callback(err, null);
    });
};
exports.read = async (query, callback) => {
  return await ProfileModel.find(query, (err, profiles) => {
    return Promise.all(
      profiles.map((profile) => {
        return axios({
          type: "GET",
          url: profile.imgLink,
          responseType: "arraybuffer",
        }).then((info) => {
          profile.imgBit = new Buffer.from(info.data, "binary").toString(
            "base64"
          );
        });
      })
    )
      .then(() => callback(err, profiles))
      .catch(() => callback(err, null));
  });
};
exports.readOne = async (id, callback) => {
  return await ProfileModel.findOne({ id: id, live: true }, (err, profile) => {
    return callback(err, profile);
  });
};
exports.update = async (id, profile, callback) => {
  return await ProfileModel.findOneAndUpdate(
    { id: id },
    profile,
    { useFindAndModify: false },
    (err, profile) => {
      return callback(err, profile);
    }
  );
};
exports.delete = async (id, callback) => {
  return await ProfileModel.findOneAndRemove(
    { id: id },
    { useFindAndModify: false },
    (err, profile) => {
      if (err) return callback(err, null);
      return callback(null, profile);
    }
  );
};
