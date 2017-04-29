<?php
require_once("connect.php");
if($con){
	mysql_select_db("jike", $con);
	$newsid=$_POST['newsid'];
	$sql="DELETE FROM newsbaidu WHERE id={$newsid}";
	mysql_query($sql,$con);
	if (mysql_query($sql,$con)){
		//echo "删除成功";
    	echo json_encode(array('success' =>'ok'));
	}else{
		echo "删除失败";
	}
}

//mysql_close($con);
?>