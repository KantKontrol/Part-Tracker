//8/3/2020 Nicholas DeRissio
const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const db = require("./models");
const mongoose = require("mongoose");
const mongourl = 'mongodb://localhost/partracdev';

app.use([
    express.urlencoded({ extended: true }),
    express.json()
]);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Link API Routes here
//db.Model.create({name: "HP G6", parts: [ {title: "Screen", quantity: 30 }, {title: "Keyboard", quantity: 10}]}, (err, data) => console.log(err));
//db.Model.create({name: "HP G5", parts: [ {title: "Keyboard", quantity: 10}]}, (err, data) => console.log(err));

require("./routes/apiRoutes")(app); //main api routes

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

mongoose.connect(mongourl, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  app.listen(PORT, () => {
    console.log("🚀  Server server now on port", PORT, "👻 React App on Port 3000");
  });
})


