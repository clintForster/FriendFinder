var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

connection.connect(function (err, response) {
if (err) throw err;
run();
});

function run() {

    

};

app.listen(PORT, function () {
console.log("App listening on PORT " + PORT);
});