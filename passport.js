const GoogleStrategy = require("passport-google-oauth20").Strategy;
const GithubStrategy = require("passport-github2").Strategy;
const passport = require("passport");

const GOOGLE_CLIENT_ID = "185221592695-s1009gigdp6cas6ooccncsl8ccj5hmvn.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";

GITHUB_CLIENT_ID = "7377b844ddcc65f8b793";
GITHUB_CLIENT_SECRET = "f344f87bfe8211baa24e2920c761422e5eb18e5b";

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

passport.use(
  new GithubStrategy(
    {
      clientID: GITHUB_CLIENT_ID,
      clientSecret: GITHUB_CLIENT_SECRET,
      callbackURL: "/auth/github/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});
//suryasj