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

    app.post("/model", (req,res)=>{

        let newModel = req.body.newModel;

        inventoryController.addModel(newModel, (success) => {
            if(success)
                res.send("success!")
            else
                res.send("fail")
        });
    });
}