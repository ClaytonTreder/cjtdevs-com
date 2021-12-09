const mongoose = require("mongoose");
require("dotenv").config();

mongoose
  .connect(process.env.CONNECTIONSTRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .catch((err) => {
    console.log(err);
  });

const newsLetterSchema = new mongoose.Schema({
  email: {
    type: String,
  },
  subscribed: {
    type: Boolean,
  },
  addedOn: {
    type: String,
  },
});

module.exports = mongoose.model("newsLetter", newsLetterSchema);
