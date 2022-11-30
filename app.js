'use strict';

const express = require('express');
var path = require("path");
//var routes = require("./routes");

// Constants
const PORT = 3000;
const HOST = '0.0.0.0';

// Appication
const app = express();
app.set("views", path.join(__dirname,"views"));
app.set("view engine", "ejs");

app.use("/", require("./routes/web"));
//app.use("/api",require("./routes/api"))

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);