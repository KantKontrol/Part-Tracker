const db = require("../models");

module.exports = {
    getInventory: function(cb){ //gets all models and their parts in inventory
        db.Model.find({}).populate("parts").exec((err, data) => {
            
            cb(err, data);
        });
    }
}