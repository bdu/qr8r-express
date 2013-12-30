var express = require('express')
  , cons = require('consolidate')
  , uuid = require('node-uuid')
  , cj = require('collection-json')
  , mongo = require('mongodb')
  , app = express();

app.engine('swig', cons.swig);
app.set('view engine', 'swig');
app.set('views', __dirname + '/views');

app.use(express.logger('dev'));

app.get('/', function(req,res){
  res.render('index', {
    title: "test page"
  });
});

app.get('/test', function(req,res){
  res.render('layout', {
    pagetitle: "test layout"
  });
});

app.listen(7787);
console.log("Listening on port 7787");

