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

const profileSchema = new mongoose.Schema({
  id: {
    type: String,
  },
  name: {
    type: String,
  },
  live: {
    type: Boolean,
  },
  contact: {
    title: {
      type: String,
    },
    email: {
      type: String,
    },
    email_mailto: {
      type: String,
    },
    phone: {
      type: String,
    },
    phone_tel: {
      type: String,
    },
  },
  employment_info: {
    title: {
      type: String,
    },
    company: {
      type: String,
    },
    employee_title: {
      type: String,
    },
    start_date: {
      type: Date,
    },
  },
  education: {
    title: {
      type: String,
    },
    degree: {
      type: String,
    },
    school: {
      type: String,
    },
    graduation_date: {
      type: Date,
    },
  },
  links: {
    title: {
      type: String,
    },
    array: [
      {
        title: {
          type: String,
        },
        link: {
          type: String,
        },
      },
    ],
  },
  favorite_project: {
    title: {
      type: String,
    },
    link: {
      type: String,
    },
    img_route: {
      type: String,
    },
  },
});

module.exports = mongoose.model("Profile", profileSchema);
