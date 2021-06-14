const express = require("express");
const cors = require("cors");
const port = 8000;
const app = express();


app.use(express.json()); //THIS ONE ALLOWS US TO USE JASON
app.use( express.urlencoded({ extended: true }));
app.use(cors())

//MODULARIZED ROUTES AND CONFIG--RENAME THESE
require("./server/config/thing.config")
require("./server/routes/thing.routes")(app)

// app.get("/", (req, res) => {
//     res.json({"message": "ok"});
// });

app.listen(port, () => console.log(`Listening on port ${port}`));
