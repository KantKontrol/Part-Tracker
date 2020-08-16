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
    }
});

const ModelSchema = Schema({
    name: {
        type: String
    },
    parts: [PartSchema],
    img: {
        type: ImageSchema,
        required: false
    } 
});

module.exports = ModelSchema, PartSchema, ImageSchema;