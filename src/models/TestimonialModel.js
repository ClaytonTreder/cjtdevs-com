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

const testimonialSchema = new mongoose.Schema({
  profileId: {
    type: String,
  },
  name: {
    type: String,
  },
  review: {
    type: String,
  },
  live: {
    type: Boolean,
  },
});

module.exports = mongoose.model("Testimonial", testimonialSchema);
