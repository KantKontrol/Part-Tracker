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

require("./routes/apiRoutes")(app);

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


