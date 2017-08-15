// Dependenceis
var express = require("express");
var bodyParser = require('body-parser');

// Init Server
var app = express();
app.set('port', process.env.PORT || process.argv[2] || 4040);

// Set up Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routing
require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);

// Server Listen
app.listen(app.get('port'), function() {
  console.log("App listening on PORT " + app.get('port'));
});
