<?php
require_once("connect.php");

	if ($con)
	{
		    mysql_select_db("jike", $con);
			$newstype=$_GET['newstype'];
			$sql="SELECT * FROM newsbaidu WHERE newstype='{$newstype}'";
			$result=mysql_query($sql,$con);
//			mysql_query("SET NAMES UTF8");    
			$dataArr=array();//创建一个空数组，把传回来的数据传到数组里
		    while($row = mysql_fetch_array($result)){
				array_push($dataArr,array(
					    'id'=>$row['id'],
						'newstype'=>$row['newstype'],
						'newstitle'=>$row['newstitle'],
						'newsimg'=>$row['newsimg'],
						'newstime'=>$row['newstime'],
						'newssrc'=>$row['newssrc']
				));
		}
		    echo json_encode ($dataArr);
			
  }
else{
		 echo json_encode(array('连接信息'=>'链接失败'));
//		 echo "连接失败";
	}
?>
