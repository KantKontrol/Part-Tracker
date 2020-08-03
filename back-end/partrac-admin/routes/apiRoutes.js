const inventoryController = require("../controllers/InventoryController");

module.exports = (app) => {


    app.get("/inventory", (req,res) => { //this route is intended for all of the inventory
        inventoryController.getInventory((err, data) => {
            if(err){
                res.send(err)
            }
            res.send(data);
        });
    });
}