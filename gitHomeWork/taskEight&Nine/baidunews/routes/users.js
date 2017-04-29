var express = require('express');
var router = express.Router();
var mysql= require('mysql');
var xss = require('xss');
var $conn=require('../connect');
var connection = mysql.createPool($conn.mysql);
//创建一个请求池
//var connection = mysql.createPool({
//host: 'localhost',
//port:3306,
//user: 'root',
//password:'',
//database:'jike'
//});
/*后台管理  */

//获取所有新闻列表
router.get('/getnews', function(req, res, next) {
	connection.query('SELECT * FROM newsbaidu  order by newstime desc',function(err,rows,field){
		res.json(rows);
	});
	
});


//确认修改
router.post('/updata', function(req, res) {
			var newsid=req.body.id,
			newstype=req.body.newstype,
			newstitle=req.body.newstitle,
			newsimg=req.body.newsimg,
			newstime=req.body.newstime,
			newssrc=req.body.newssrc;
	connection.query('UPDATE newsbaidu SET newstype=?,newstitle=?,newsimg=?,newstime=?,newssrc=? WHERE id=?',[newstype,newstitle,newsimg,newstime,newssrc,newsid],function(err,rows,field){
		res.json(rows.changedRows);
	});
	
});

//获取被修改的新闻信息
router.get('/current', function(req, res) {
	var newsid=req.query.newsid;
	connection.query('SELECT * FROM newsbaidu WHERE id=?',[newsid],function(err,rows){
		res.json(rows);
	});
	
});

//删除新闻
router.post('/delete', function(req, res, next) {
	var newsid=req.body.newsid;
	connection.query('DELETE FROM newsbaidu WHERE id=?',[newsid],function(err,result){
		console.log(result.effectedRows);
		if(!err){
			res.end();
		}
	});
	
});

//插入新闻
router.post('/insert',function(req,res){
	var newstype=req.body.newstype,
			newstitle=xss(req.body.newstitle),
			newsimg=req.body.newsimg,
			newstime=req.body.newstime,
			newssrc=req.body.newssrc;
			connection.query('INSERT INTO newsbaidu (newstype, newstitle,newsimg,newstime,newssrc) VALUES (?,?,?,?,?)',[newstype,newstitle,newsimg,newstime,newssrc],function(err,result){
				if(!err){
					console.log(result.insertId);
					res.end();
				}
			});
});


module.exports = router;
