var express = require('express');
var router = express.Router();
//连接mysql数据库
var mysql=require('mysql');
//引入自定义的数据库配置文件
var databs=require('./../config/databs');
console.log(databs);
var connection=mysql.createConnection(databs);
//连接数据库
connection.connect();
/* GET users listing. */
router.get('/', function(req, res, next) {
	res.render('custom');
});
//验证用户是否预约
router.post('/user',function(req,res,next){
	//获取post提交的数据
	//console.log(req.body);
	var usname=req.body.usname;
	//连接数据库查询该用户名是否存在
	var selectSql='SELECT usname FROM subscri WHERE usname=?';
	var selectParams=[usname];
	connection.query(selectSql,selectParams,function(err,result){
		  if(err){
			  console.error(err);
			  return;
		  }
		  console.log(result);
		  // 判断是否返回结果
		// 通过res.send()为ajax返回值
		  if(result.length){
			  res.send('false')
		  }else{
			  res.send('true');
		  }
})
//用户预约
router.post('/addforward', function(req, res, next) {
	console.log(req.body)
	var yearmoudy = req.body.yearmoudy;
	var usname = req.body.usname;
	var times = req.body.times;
	var province = req.body.province;
	var city = req.body.city;
	var store = req.body.store;
	
	var insertSql = 'INSERT INTO subscri(id,usname,yearmoudy,times,province,city,store) VALUE(null,?,?,?,?,?,?)';
	var insertParams = [usname,yearmoudy,times,province,city,store];
	connection.query(insertSql,insertParams,function(err,result){
		console.log(result.insertId)
	})
	res.redirect('/custom');
});
})
module.exports = router;
