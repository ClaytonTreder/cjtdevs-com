import ContactModel from "../models/ContactModel.js";

export async function readOne(id, callback) {
  return await ContactModel.findOne({ id: id }, (err, contact) => {
    return callback(err, contact);
  });
}
