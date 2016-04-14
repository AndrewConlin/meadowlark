var express = require('express');
var app = express();

var handlebars = require('express-handlebars').create({defaultLayout:'main'});
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

var fortune = require('./lib/fortune.js');

//middleware
app.use(express.static(__dirname + '/public'));

app.use(function(req, res, next){
	res.locals.showTests = app.get('env') !== 'production' &&
		req.query.test === '1';
	next();
});

//routes
app.get('/', function(req, res){
      res.render('home');
});

app.get('/about', function(req, res){
      res.render('about', {
          fortune: fortune.getFortune(),
          pageTestScript: '/qa/tests-about.js'
        });
});

app.get('/tours/hood-river', function(req, res){
	res.render('tours/hood-river');
});

app.get('/tours/oregon-coast', function(req, res){
	res.render('tours/oregon-coast');
});

app.get('/tours/request-group-rate', function(req, res){
	res.render('tours/request-group-rate');
});

//custom 404
app.use(function(req, res){
      res.status(404);
      res.render('404');
});

//custom 500
app.use(function(err, req, res, next){
      console.log(err.stack);
      res.status(500);
      res.render('500');
});

var fortunes = ["Conquer your fears or they will conquer you.",
                "riveres eed springs.",
                "Do not fear what you don't know.",
                "You will have a pleasant surprise.",
                "Whenever possible, keep it simple."];

app.listen(3000, function(){
      console.log('Express strted on http://localhost:' + 3000 + '; press ctrl-c to terminate.');
});
