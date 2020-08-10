const mongoose = require("mongoose");
const ModelSchema = require("./Schema");



const LogSchema = mongoose.Schema({
    initials: {
        type: String
    },
    models: [ModelSchema],
    partTotal: {
        type: Number
    }
});

const Log = mongoose.model("Log", LogSchema);

module.exports = Log;