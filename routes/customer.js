var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  res.render('index', { title: 'Express' });
});

/* GET home page. */
router.get('/New', function(req, res, next) {

  res.render('CustomerForm', { title: 'Express' });
});

router.post('/New', function(req, res, next) {

  res.render('CustomerForm', { title: 'Express' });
});

module.exports = router;
