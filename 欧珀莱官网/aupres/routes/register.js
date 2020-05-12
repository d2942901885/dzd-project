var express = require('express');
var router = express.Router();

var mysql = require('mysql');

var db = require('./../config/databs');
 
var connection = mysql.createConnection(db)
connection.connect()
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('register'); 
});
router.post('/selectUser',function(req,res,next){
	// console.log(req.body);
	var username = req.body.name;
	
	// 连接数据库查询该用户名是否存在
	var selectSql = 'SELECT name FROM login WHERE name=?';
	var selectParams = [username];
	connection.query(selectSql,selectParams,function(err,result){
		  if(err){
			  console.error(err);
			  return;
		  }
		  // console.log(result);
		  // 判断是否返回结果
		
		// 通过res.send()为ajax返回值
		  if(result.length){
			  res.send('false')
		  }else{
			  res.send('true');
		  }
	})
	router.post('/addUser', function(req, res, next) {
		console.log(req.body)
		var username = req.body.username;
		var password = req.body.pass;
		
		var insertSql = 'INSERT INTO login (name,password) VALUES(?,?)';
		var insertParams = [username,password];
		connection.query(insertSql,insertParams,function(err,result){
			console.log(result.insertId)
		})
		
		res.redirect('/login?name='+username+'&pass='+password);
	});
});
module.exports = router;
