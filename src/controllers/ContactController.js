import ContactModel from "../models/ContactModel.js";

export async function readOne(id, callback) {
  return await ContactModel.findOne({ id: id }, (err, contact) => {
    return callback(err, contact);
  });
}
export async function update(id, contact, callback) {
  return await ContactModel.findOneAndUpdate(
    { id: id },
    contact,
    { useFindAndModify: false },
    (err, contact) => {
      return callback(err, contact);
    }
  );
}
