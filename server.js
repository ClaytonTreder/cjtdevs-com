const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const cors = require("cors");
const path = require("path");

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


app.use("/", express.static(path.join(__dirname, "./build")));
app.get('*', (req, res) => res.sendFile(path.resolve('build', 'index.html')));

app.listen(PORT, () => {
  console.log(`App is listening on Port: ${PORT}`);
});
