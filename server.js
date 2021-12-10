import express from "express";
const app = express();
import cors from "cors";
import path from "path";
import expressSession from "express-session";
import passport from "passport";
import Auth0Strategy from "passport-auth0";
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 5010;

app.use(express.json());

var corsOptions = {
  origin: process.env.CORSORIGIN,
  methods: "POST, GET, PUT, DELETE",
  preflightContinue: false,
  optionsSuccessStatus: 204,
};

const session = {
  secret: process.env.SESSION_SECRET,
  cookie: {},
  resave: false,
  saveUninitialized: false,
};

if (app.get("env") === "production") {
  session.cookie.secure = true;
}

const strategy = new Auth0Strategy(
  {
    domain: process.env.AUTH0_DOMAIN,
    clientID: process.env.AUTH0_CLIENT_ID,
    clientSecret: process.env.AUTH0_CLIENT_SECRET,
    callbackURL: process.env.AUTH0_CALLBACK_URL,
  },
  function (accessToken, refreshToken, extraParams, profile, done) {
    return done(null, profile);
  }
);

app.use(expressSession(session));

passport.use(strategy);
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

app.use((req, res, next) => {
  if (!(req.path.startsWith("/content") || req.path.startsWith("/static"))) {
    console.table({
      url: req.path,
      method: req.method,
      userAgent: req.headers[3],
      ip: req.headers["x-forwarded-for"] || req.socket.remoteAddress,
    });
  }
  next();
});

import authRouter from "./src/routes/AuthRoute.js";
app.use("/auth", cors(corsOptions), authRouter);

import ContactRouter from "./src/routes/ContactRoute.js";
app.use("/api/contact", cors(corsOptions), ContactRouter);

import MailerRouter from "./src/routes/MailerRoute.js";
app.use("/api/mailer", cors(corsOptions), MailerRouter);

import NewsLetterRoute from "./src/routes/NewsLetterRoute.js";
app.use("/api/newsletter", cors(corsOptions), NewsLetterRoute);

import TextRoute from "./src/routes/TextRoute.js";
app.use("/api/text", cors(corsOptions), TextRoute);

//health check
app.use("/api/health", (req, res) => {
  res.sendStatus(200);
});

app.use("/", express.static("./build"));
app.get("*", (req, res) => res.sendFile(path.resolve("build", "index.html")));

app.listen(PORT, () => {
  console.log(`App is listening on Port: ${PORT}`);
});
