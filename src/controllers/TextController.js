import TextModel from "../models/TextModel.js";

export async function create(text, callback) {
  try {
    const newText = await TextModel.create(text);
    callback(null, newText);
  } catch (err) {
    callback(null);
  }
}

export async function read(query, callback) {
  try {
    const foundTexts = await TextModel.find(query);
    callback(null, foundTexts);
  } catch (err) {
    callback(err);
  }
}

export async function readOne(id, callback) {
  try {
    const foundText = await TextModel.findOne({ id: id });
    callback(null, foundText);
  } catch (err) {
    callback(err);
  }
}

export async function readById(_id, callback) {
  try {
    const foundText = await TextModel.findById(_id);
    callback(null, foundText);
  } catch (err) {
    callback(err);
  }
}

export async function update(query, text, callback) {
  try {
    const updateText = await TextModel.findOneAndUpdate(query, text, {
      useFindAndModify: false,
    });
    callback(null, updateText);
  } catch (err) {
    callback(err);
  }
}

export async function updateOne(id, text, callback) {
  try {
    const updateText = await TextModel.findOneAndUpdate({ id: id }, text, {
      useFindAndModify: false,
    });
    callback(null, updateText);
  } catch (err) {
    callback(err);
  }
}
export async function updateById(_id, text, callback) {
  try {
    const updateText = await TextModel.findByIdAndUpdate(_id, text);
    callback(null, updateText);
  } catch (err) {
    callback(err);
  }
}

export async function deleteOne(query, callback) {
  try {
    await TextModel.findOneAndDelete(query, { useFindAndModify: false });
    callback(null);
  } catch (err) {
    callback(err);
  }
}
export async function deleteById(_id, callback) {
  try {
    await TextModel.findByIdAndDelete(_id);
    callback(null);
  } catch (err) {
    callback(err);
  }
}
