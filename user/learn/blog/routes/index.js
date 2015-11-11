var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/hello', function(req, res, next) {
  res.send("the is the test route");
});

router.get("/user/:username",function(req,res){
	res.send("user:" + req.params.username);
})

module.exports = router;
