const mongoose = require("mongoose");


const LogSchema = mongoose.Schema({
    initials: {
        type: String
    },
    models: [{
        type: String,
        parts: [{
            name: String,
            quantity: Number,
        }]
    }],
    partTotal: {
        type: Number
    }
});

const Log = mongoose.model("Log", LogSchema);

module.exports = Log;