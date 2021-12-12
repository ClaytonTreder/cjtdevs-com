import express from "express";
const router = express.Router();

import passport from "passport";

import dotenv from "dotenv";
dotenv.config();

router.get(
  "/login",
  passport.authenticate("auth0", {
    scope: "openid email profile",
  }),
  (req, res) => {
    res.redirect("/callback");
  }
);

router.get("/callback", (req, res, next) => {
  passport.authenticate("auth0", (err, user, info) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.redirect("/");
    }
    req.logIn(user, (err) => {
      if (err) {
        return next(err);
      }
      res.redirect("/admin");
    });
  })(req, res, next);
});

router.get("/logout", (req, res) => {
  req.logOut();
  res.redirect(
    `https://${process.env.AUTH0_DOMAIN}/v2/logout?client_id=${process.env.AUTH0_CLIENT_ID}&returnTo=${process.env.AUTH0_LOGOUT_URL}`
  );
});

router.get("/loggedIn", (req, res) => {
  if (req.user !== undefined && req.user !== null) {
    res.sendStatus(200);
  } else {
    res.sendStatus(401);
  }
});

export default router;
