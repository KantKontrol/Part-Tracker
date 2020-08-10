const mongoose = require("mongoose");
const ModelSchema = require("./Schema");


const Model = mongoose.model("Model", ModelSchema);

module.exports = Model;