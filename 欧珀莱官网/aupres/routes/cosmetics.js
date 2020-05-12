var express = require('express');
var router = express.Router();
// 连接mysql数据库
var mysql = require('mysql');
// 连接数据库

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('cosmetics');
});

module.exports = router;
