const db = require("../models");

module.exports = {
    getInventory: function(cb){ //gets all models and their parts in inventory
        db.Model.find({}, (err, data) => {
            cb(err, data);
        });
    },
    addModel: function(model, cb){ //this creates a model
        db.Model.create(model, (err, data) => {
            cb(err, data);
        });
    },
    addPart: function(modelId, part, cb){ //this adds a part to an existing model
        db.Model.findOne({ _id: ObjectId(modelId)}, (err, model) => {

            model.parts.push(part);

            model.save().then(() => {
                cb(true);
            });
        });
    },
    getLogs: function(cb){ //this gets all logs
        db.Log.find({}, (err, data) => {
            cb(err, data);
        });
    }
}