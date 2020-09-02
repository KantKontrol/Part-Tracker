const mongoose = require("mongoose");
//const bcrypt = require("bcryptjs");

const UserSchema = mongoose.Schema({
    user: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    }
});

UserSchema.statics.verifyPassword = function(pass, callback) {
    return this.model.find({ password: pass }, callback);
}

const User = mongoose.model("User", UserSchema);

module.exports = User;