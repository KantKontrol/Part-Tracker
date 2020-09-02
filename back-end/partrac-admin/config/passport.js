var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;

var db = require("../models");

// Telling passport we want to use a Local Strategy. In other words, we want login with a username/email and password
passport.use(new LocalStrategy(
    function (username, password, done) {
        // When a user tries to sign in this code runs
        db.User.findOne({ user: username }).then(function (dbUser) {
            console.log(dbUser)
            // If there's no user with the given name
            if (!dbUser) {
                return done(null, false, {
                    message: "Incorrect user."
                });
            }
            // If there is a user with the given email, but the password the user gives us is incorrect
            else if(!dbUser.password === password){
                return done(null, false, {
                    message: "Incorrect password."
                });
            }
            // If none of the above, return the user
            return done(null, dbUser);
        });
    }
));


// In order to help keep authentication state across HTTP requests,
// Sequelize needs to serialize and deserialize the user
// Just consider this part boilerplate needed to mak`e it all work
passport.serializeUser(function (user, cb) {
    cb(null, user);
});

passport.deserializeUser(function (obj, cb) {
    cb(null, obj);
});



module.exports = passport;