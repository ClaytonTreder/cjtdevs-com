const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const cors = require("cors");

require("dotenv").config();

app.use(express.json());

app.use("/", express.static('build'));

var corsOptions = {
  origin: process.env.CORSORIGIN,
  methods: "POST, GET, PUT, DELETE",
  preflightContinue: false,
  optionsSuccessStatus: 204,
};

const ProfileRouter = require("./src/routes/ProfileRoute");
app.use("/api/profiles", cors(corsOptions), ProfileRouter);

const MailerRouter = require("./src/routes/MailerRoute");
app.use("/api/mailer", cors(corsOptions), MailerRouter);

app.listen(PORT, () => {
  console.log(`App is listening on Port: ${PORT}`);
});
