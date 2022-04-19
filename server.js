// Use Express
const express = require("express");
const http = require('http');
const path = require('path');


// Create new instance of the express server
const app = express();
const port = process.env.PORT || 8080;


// Create link to Angular build directory
// The `ng build` command will save the result
// under the `dist` folder.
var distDir = __dirname + "/dist/frontend-portfolio";
app.use(express.static(distDir));


app.get("/*", function (req, res) {
    res.sendFile(path.join(__dirname))
});


// Init the server
var server = app.listen(port, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
});