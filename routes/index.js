var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Style Guide' });
});

router.get('/test', function(req, res, next) {
  res.render('test', { title: 'Style Guide' });
});

router.get('/base', function(req, res, next){
  res.render('base', { title: 'Style Guide: Base'})
});

router.get('/typography', function(req, res, next){
  res.render('typography', { title: 'Style Guide: Typography'})
});

router.get('/boxes', function(req, res, next){
  res.render('boxes', { title: 'Style Guide: Boxes'})
});

router.get('/buttons', function(req, res, next){
  res.render('buttons', { title: 'Style Guide: Buttons'})
});

router.get('/nav', function(req, res, next){
  res.render('nav', { title: 'Style Guide: Nav'})
});

router.get('/interactions', function(req, res, next){
  res.render('interactions', { title: 'Style Guide: Interactions'})
});

router.get('/grid', function(req, res, next){
  res.render('grid', { title: 'Style Guide: Grid'})
});

router.get('/color', function(req, res, next){
  res.render('color', { title: 'Style Guide: Color'})
});

router.get('/standards', function(req, res, next){
  res.render('standards', { title: 'Style Guide: Standards'})
});


module.exports = router;
