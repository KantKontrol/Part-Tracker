const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.String,
        require: true
    },
    password: {
        type: mongoose.Schema.Types.String,
        require: true
    }
});

const User = mongoose.model("User", UserSchema);

export default User;