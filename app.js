const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const routes = require("./routes/urlRoutes");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "ejs");

const port = process.env.PORT || 3000;
const dbURI = "mongodb+srv://simon_kenn:l6Ryk1pqLzRFji8O@nodetuts.98u8x.mongodb.net/node-tuts?retryWrites=true&w=majority";

mongoose.connect(dbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log("Connected to db");
    app.listen(port, () => {
      console.log(`App litening on ${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });

app.get("/", cors(), (req, res) => {
  res.send("index");
});

app.use("/api/shorturl", cors(), routes);
