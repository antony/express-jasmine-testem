var app, express;

express = require('express');

exports.app = app = express();

app.use(express.logger());
app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/views');
app.set('view engine', 'html');

app.get("/", function(req, res) {
  return res.send("Hello, world!");
});

app.post("/", function(req, res) {
  return res.send("You posted!");
});

if (process.argv[2] !== 'spec') { // Hack!
	app.listen(3000, function() {
		console.log('Express started in %s mode. Visit http://localhost:%d', app.settings.env, this.address().port);
	});
}