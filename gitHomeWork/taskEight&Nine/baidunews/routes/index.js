var express = require('express');
var router = express.Router();
var mysql=require('mysql');
//var $conn=require('../connect');
//var connection = mysql.createConnection($conn.mysql);

var connection = mysql.createConnection({
	host: 'localhost',
	port:3306,
	user: 'root',
	password:'',
	database:'jike'
});

//在主页获取获取新闻时的请求
router.get('/', function(req, res, next) {
	var newstype=req.query.newstype;
//  connection.connect();
  
    connection.query('SELECT * FROM newsbaidu WHERE newstype=? order by newstime desc',[newstype],function(err,rows,fieids){
  	res.json(rows);
  });
});

module.exports = router;
