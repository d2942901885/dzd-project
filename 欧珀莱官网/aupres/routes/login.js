var express = require('express');
var router = express.Router();
var url = require('url');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'Express' });
  var data = url.parse(req.url,true).query;
  console.log(data)
  if(data){
  	res.render('login',{name:data.name,pass:data.pass});
  }else{
  	res.render('login',{name:'',pass:''})
  }
});

module.exports = router;
