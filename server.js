var express = require('express');
var appshopper = require('./appshopper')
var PORT = 8081;

// App
var app = express();

app.get('/query/:query', function (req, res) {
  appshopper.query(req.params.query).stream().pipe(res);
});

app.get('/detail/:category/:name', function (req, res) {
    var querystring = require("querystring");
    var category =  req.params.category;
    var name =  querystring.escape(req.params.name);
    var url = 'http://appshopper.com/' + category + '/' + name ;

    appshopper.detail(url).stream().pipe(res);
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);
