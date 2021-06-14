const ThingController = require("../controllers/thing.controller");


module.exports = app =>{
    app.get("/api/things", ThingController.findAllThings)
    app.post("/api/things/create", ThingController.createThing)
    app.get("/api/things/:id", ThingController.findOneThing)
    app.put("/api/things/update/:id", ThingController.updateOneThing)
    app.delete("/api/things/delete/:id", ThingController.deleteThing)

}




