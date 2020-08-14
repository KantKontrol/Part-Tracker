const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PartSchema = Schema({
    title: {
        type: String
    },
    quantity: {
        type: Number
    },
    imgSrc: {
        type: String
    }
});

const ModelSchema = Schema({
    name: {
        type: String
    },
    parts: [PartSchema],
    imgSrc: {
        type: String
    }
});

module.exports = ModelSchema, PartSchema;