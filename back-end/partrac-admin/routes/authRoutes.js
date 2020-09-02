const passport = require("../config/passport");

module.exports = (app) => {

    app.post("/auth/login", passport.authenticate('local'), (req, res) => {
        console.log(req.user);
        res.json(req.user);
    });
}