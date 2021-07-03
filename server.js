const express = require("express");
const app = express();
const PORT = process.env.SERVERPORT || 5000;
const cors = require("cors");

require("dotenv").config();

app.use(express.json());

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

//health check
app.use("/api", (req, res) => {
  res.sendStatus(200);
});

app.listen(PORT, () => {
  console.log(`App is listening on Port: ${PORT}`);
});
