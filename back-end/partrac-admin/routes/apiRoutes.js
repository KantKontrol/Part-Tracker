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
            
            let models = data.map(e => {
                if(e.img)
                    return { 
                        name: e.name, 
                        imageData: e.img.imageData
                    }
                else return e;
            });
            res.send(models);
        });
    });

    app.post("/model/image", upload.single('imageData'), (req, res) => {

        try {
            console.log(req.body)
            const { model_id, imageName } = req.body;
            const path = req.file.path;
            console.log(req.file.path)
    
            console.log("updating: " + model_id)
    
            inventoryController.addImageToModel(model_id, imageName, path, (success) => {
                res.send(success);
            });
        }
        catch(err){
            console.log("something went wrong with image upload :( Client Notified.")
            console.log(err);
            res.status(500).send(err);
        }
    });

    app.post("/model", (req,res)=>{ //this route is intended to add models

        let data = req.body;

        let newModel = {
            name: data.model_name,
            parts: data.parts
        }

        inventoryController.addModel(newModel, (err, result) => {
            if(err)
                res.send(err);
            else{
                res.send(result);
            }    
        });
    });


    app.get("/inventory/logs", (req,res) => { //this route is intended to get log data
        inventoryController.getLogs((err,data) => {
            if(err)throw err;

            res.send(data);
        });
    });
}