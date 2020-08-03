const mongoose = require("mongoose");

const ModelSchema = mongoose.Schema({
    ModelName: {
        type: mongoose.Schema.Types.String
    },
    parts: [{ type: mongoose.Schema.Types.ObjectId, ref: "Part"}]
});

const Model = mongoose.model("Model", ModelSchema);

export default Model;