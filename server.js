const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
const expressSession = require("express-session");
const passport = require("passport");
const Auth0Strategy = require("passport-auth0");

require("dotenv").config();

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

const authRouter = require("./src/routes/AuthRoute");
app.use("/auth", cors(corsOptions), authRouter);

const AdminRouter = require("./src/routes/AdminRoute");
app.use("/api/admin", cors(corsOptions), AdminRouter);

const ContactRouter = require("./src/routes/ContactRoute");
app.use("/api/contact", cors(corsOptions), ContactRouter);

const AboutRouter = require("./src/routes/AboutRoute");
app.use("/api/about", cors(corsOptions), AboutRouter);

const ProfileRouter = require("./src/routes/ProfileRoute");
app.use("/api/profiles", cors(corsOptions), ProfileRouter);

const MailerRouter = require("./src/routes/MailerRoute");
app.use("/api/mailer", cors(corsOptions), MailerRouter);

const TestimonialRoute = require("./src/routes/TestimonialRoute");
app.use("/api/testimonial", cors(corsOptions), TestimonialRoute);

const NewsLetterRoute = require("./src/routes/NewsLetterRoute");
app.use("/api/newsletter", cors(corsOptions), NewsLetterRoute);

//health check
app.use("/api", (req, res) => {
  res.sendStatus(200);
});

app.use("/", express.static(path.join(__dirname, "./build")));
app.get("*", (req, res) => res.sendFile(path.resolve("build", "index.html")));

app.listen(PORT, () => {
  console.log(`App is listening on Port: ${PORT}`);
});
