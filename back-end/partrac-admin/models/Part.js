const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PartSchema = Schema({
    modelID: { type: Schema.Types.ObjectId, ref: "Model" },
    quantity: {
        type: Schema.Types.Number
    },
    imgSrc: {
        type: Schema.Types.String
    }
});


const Part = mongoose.model("Part", PartSchema);

export default Part;