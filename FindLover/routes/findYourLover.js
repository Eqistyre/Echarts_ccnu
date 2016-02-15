var express = require('express');
var request = require('request');
var app = express();
var router = express.Router();

/* GET findYourLover page. */

router.get('/', function(req, res, next) {
  res.render('findYourLover', { title: 'findYourLover' });
});

//form submit
router.post('/server', function(req, res, next) {
   //use request to post the data to
  request.post({
  url:'http://console.ccnu.edu.cn/ecard/getTrans',
  form: {
       userId:req.body.userId,
       days:req.body.days,
       startNum:req.body.startNum,
       num:req.body.num
   }},
  function(err,httpResponse,body) {
    var returnData = httpResponse.body;
    res.render('findYourLover', { returnData: returnData });
    console.log(returnData);
    // res.send
  })
});

module.exports = router;
