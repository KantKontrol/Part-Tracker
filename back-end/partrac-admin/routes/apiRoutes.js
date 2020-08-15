const inventoryController = require("../controllers/InventoryController");
const multer = require("multer");

module.exports = (app) => {

    const storage = multer.diskStorage({
        destination: function(req, file, cb){
            cb(null, './uimage/');
        },
        filename: function(req, file, cb){
            cb(null, Date.now() + file.originalname);
        }
    });

    const fileFilter = function(req, file, cb){
        if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png'){
            cb(null, true);
        }
        else
            cb(null, false);
    }

    const upload = multer({
        storage: storage,
        limits: {
            fileSize: 1024 * 1024 * 5
        },
        fileFilter: fileFilter
    });

    app.get("/inventory", (req,res) => { //this route is intended for all of the inventory
        inventoryController.getInventory((err, data) => {
            if(err){
                res.send(err)
            }
            res.send(data);
        });
    });

    app.get("/inventory/model", (req,res) => { //this route is intended for all models
        console.log("Model request")
        inventoryController.getInventory((err, data) => {
            if(err){
                res.send(err)
            }

            let models = data.map(e => e.name)
            res.send(models);
        });
    });

    app.post("/model", (req,res)=>{ //this route is intended to add models

        let newModel = req.body.newModel;

        inventoryController.addModel(newModel, (success) => {
            if(success)
                res.send("success!");
            else
                res.send("fail");
        });
    });


    app.get("/inventory/logs", (req,res) => { //this route is intended to get log data
        inventoryController.getLogs((err,data) => {
            if(err)throw err;

            res.send(data);
        });
    });
}