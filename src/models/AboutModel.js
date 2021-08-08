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

const aboutSchema = new mongoose.Schema({
  id: {
    type: String,
  },
  title: {
    type: String,
  },
  content: [{ type: String }],
});

module.exports = mongoose.model("About", aboutSchema);
