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
    profiles.map((val) => {
      val.profile ? (val.profile.imgLink = null) : false;
    });
    return callback(err, profiles);
  });
};
exports.readOne = async (id, callback) => {
  return await ProfileModel.findOne({ id: id, live: true }, (err, profile) => {
    return axios({
      type: "GET",
      url: profile.imgLink,
    })
      .then((info) => {
        if (info.data || profile.imgBit) {
          profile.imgBit = info.data || imgBit;
        } else {
          return callback("image not found1");
        }
        return callback(err, profile);
      })
      .catch((err) => {
        if (profile.imgBit) {
          return callback(err, profile);
        } else {
          return callback("image not found");
        }
      });
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
