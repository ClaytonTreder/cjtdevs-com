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

const contactSchema = new mongoose.Schema({
  id: {
    type: String,
  },
  title: {
    type: String,
  },
  placeholder: {
    contact: {
      type: String,
    },
    subject: {
      type: String,
    },
    message: {
      type: String,
    },
  },
  respone_messages: {
    failed: {
      type: String,
    },
    success: {
      type: String,
    },
    recapthca: {
      type: String,
    },
  },
  email_info: {
    type: String,
  },
  email: {
    admin: {
      type: String,
    },
    info: {
      type: String,
    },
    hello: {
      type: String,
    },
  },
});

module.exports = mongoose.model("Contact", contactSchema);
