<?php
require_once("connect.php");

	if ($con){
		mysql_select_db("jike", $con);
		//修改新闻
		$newstitle=$_POST['newstitle'];
		$newstype=$_POST['newstype'];
		$newsimg=$_POST['newsimg'];
		$newstime=$_POST['newstime'];
		$newssrc=$_POST['newssrc'];
		$id=$_POST['id'];
		
$sql="UPDATE newsbaidu SET newstype='{$newstype}',newstitle='{$newstitle}',newsimg='{$newsimg}',newstime='{$newstime}',newssrc='{$newssrc}'WHERE id={$id}";
	mysql_query($sql,$con);
		echo json_encode(array('success' =>'ok'));
	}
	
?>