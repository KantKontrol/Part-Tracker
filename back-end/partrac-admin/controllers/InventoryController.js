const db = require("../models");

module.exports = {
    getInventory: function(cb){ //gets all models and their parts in inventory
        db.Model.find({}, (err, data) => {
            cb(err, data);
        });
    },
    addModel: function(model, cb){
        db.Model.create(model, (err, data) => {
            cb(err, data);
        });
    },
    addPart: function(modelId, part, cb){
        db.Model.findOne({ _id: ObjectId(modelId)}, (err, model) => {

            model.parts.push(part);

            model.save().then(() => {
                cb(true);
            });
        });
    },
    getLogs: function(cb){
        db.Log.find({}, (err, data) => {
            cb(err, data);
        });
    }
}