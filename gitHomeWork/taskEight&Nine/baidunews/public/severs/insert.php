<?php
require_once("connect.php");

	if ($con){
		mysql_select_db("jike", $con);
		//插入新闻
		$newstitle=htmlspecialchars($_POST['newstitle']);
		$newstype=$_POST['newstype'];
		$newsimg=$_POST['newsimg'];
		$newstime=addslashes($_POST['newstime']);
		$newssrc=$_POST['newssrc'];
		
$sql="INSERT INTO newsbaidu (newstype, newstitle,newsimg,newstime,newssrc) VALUES ('{$newstype}','{$newstitle}','{$newsimg}','{$newstime}','{$newssrc}')";
	
	if (!mysql_query($sql,$con)){
		echo "输入失败";
	}
	
	
		echo json_encode(array('success' =>'ok'));
//		echo json_encode(array(
//				$newstitle=$_POST['newstitle'],
//				$newstype=$_POST['newstype'],
//				$newsimg=$_POST['newsimg'],
//				$newstime=$_POST['newstime'],
//				$newssrc=$_POST['newssrc']
//		));
	}
	
	
?>