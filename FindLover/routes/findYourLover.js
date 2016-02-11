var express = require('express');
var app = express();
var router = express.Router();

/* GET findYourLover page. */

router.get('/', function(req, res, next) {
  res.render('findYourLover', { title: 'findYourLover' });
});

module.exports = router;
