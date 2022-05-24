const express = require("express");
const secret = require("./json/hidden.json")
const app = express();

app.get("/", (req, res) => {

    res.send("Hello World.");

});

app.listen(secret.port);