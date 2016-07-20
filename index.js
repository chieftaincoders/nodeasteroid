var express = require('express');
var exphbs  = require('express-handlebars');
var app = express();

// Set the view engine.
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Render get page
app.get('/', function (req, res) {
  res.render('index', {title: "Hey Class",
    message: "Here's you use use templates"});
});

app.get('/about', function(req, res) {
  res.render('about')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
