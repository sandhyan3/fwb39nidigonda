var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('ball', { title: 'Search Results for balls' });
});

module.exports = router;