<?php
require_once("connect.php");

	if ($con)
	{
		mysql_select_db("jike", $con);
		$sql="SELECT * FROM newsbaidu" ;
		$result = mysql_query($sql, $con);
		mysql_query("SET NAMES UTF8");
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
	}
	

//$arr = array(
//	'newstype' => '百家',
//	'newsimg' => 'img/2.jpg',
//	'newstime'=>'2016年11月17日',
//	'newssrc'=>'极客学院',
//	'newstitile'=>'测试获取的新闻标题'
//);
//	echo json_encode ( $arr );
?>