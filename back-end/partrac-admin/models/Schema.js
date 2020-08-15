const mongoose = require("mongoose");

const Schema = mongoose.Schema;


const ImageSchema = Schema({
    imageName: {
        type: String,
        default: "none",
        required: true
    },
    imageData: {
        type: String,
        required: true
    }
});

const PartSchema = Schema({
    title: {
        type: String
    },
    quantity: {
        type: Number
    },
    img: ImageSchema
});

const ModelSchema = Schema({
    name: {
        type: String
    },
    parts: [PartSchema],
    img: ImageSchema
});

module.exports = ModelSchema, PartSchema, ImageSchema;