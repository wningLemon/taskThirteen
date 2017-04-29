<?php
require_once("connect.php");

if($con){
	mysql_select_db("jike", $con);
	$newsid=$_GET['newsid'];
	$sql="SELECT * FROM newsbaidu WHERE id={$newsid}";
    $result=mysql_query($sql,$con);
	$senddata=array();
	while($row = mysql_fetch_array($result)){
			array_push($senddata,array(
				   'id'=>$row['id'],
					'newstype'=>$row['newstype'],
					'newstitle'=>$row['newstitle'],
					'newsimg'=>$row['newsimg'],
					'newstime'=>$row['newstime'],
					'newssrc'=>$row['newssrc']
			));
		}
		echo json_encode ($senddata);
	
	
//	if (mysql_query($sql,$con)){
//		//echo "删除成功";
//  	echo json_encode(array('success' =>'ok'));
//	}else{
//		echo json_encode(array('success' =>'fail'));
//	}
}
?>