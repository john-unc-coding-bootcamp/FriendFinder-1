// Dependenceis
var express = require("express");
var path = require('path');
var bodyParser = require('body-parser');

var app = express();
app.set('port', process.env.PORT || process.argv[2] || 4040);

// Server Listen
app.listen(app.get('port'), function() {
  console.log("App listening on PORT " + PORT);
});
