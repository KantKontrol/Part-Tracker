const mongoose = require("mongoose");


const LogSchema = mongoose.Schema({
    initials: {
        type: mongoose.Schema.Types.String
    },
    models: [{
        type: mongoose.Schema.Types.String,
        parts: [{
            name: mongoose.Schema.Types.String,
            quantity: mongoose.Schema.Types.Number,
        }]
    }],
    partTotal: {
        type: mongoose.Schema.Types.Number
    }
});

const Log = mongoose.model("Log", LogSchema);

export default Log;