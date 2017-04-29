//打开后台页面的时候，发送请求，刷新新闻列表
$(document).ready(function(){
	var $tableBody=$('#newstable tbody');
	refreshNews();
	
	//去掉提交新闻按钮的默认事件
	$("#btnSubmit").click(function(e){
		e.preventDefault();
		
		//提交前需要判断输入框是否为空
		if($('#newstitle').val()===''||$('#newstype').val()===''||$('#newsimg').val()===''||$('#newstime').val()===''||$('#newssrc').val()===''){
			if($('#newstitle').val()===''){
				$('#newstitle').parent().addClass('has-error');
			}else{
				$('#newstitle').parent().removeClass('has-error');
			}
			
			if($('#newstype').val()===''){
				$('#newstype').parent().addClass('has-error');
			}else{
				$('#newstype').parent().removeClass('has-error');
			}
			
			if($('#newsimg').val()===''){
				$('#newsimg').parent().addClass('has-error');
			}else{
				$('#newsimg').parent().removeClass('has-error');
			}
			
			if($('#newstime').val()===''){
				$('#newstime').parent().addClass('has-error');
			}else{
				$('#newstime').parent().removeClass('has-error');
			}
			
			if($('#newssrc').val()===''){
				$('#newssrc').parent().addClass('has-error');
			}else{
				$('#newssrc').parent().removeClass('has-error');
			}
			
		}else{
			//提交信息
//			var $date=$('#newstime').val();
//			var $time=getNowFormatDate();
//			var $datetime=$date+" "+$time;
//			$datetime = $datetime.replace(/-/g,"/");
//          var datenew = new Date($datetime);
//			alert(datenew);
//			$('#newstime').val(datenew);
			var jsonNews={
				newstitle:$("#newstitle").val(),
				newstype:$("#newstype").val(),
				newsimg:$("#newsimg").val(),
				newstime:$("#newstime").val(),
				newssrc:$("#newssrc").val(),
				
			};
			
			$.ajax({
				type:"post",
				url:"admin/insert",
				data:jsonNews,
				datatype:"json",
				success:function(data){
					console.log(data);
					tishi();
					refreshNews();
					clear();
				}
			});
		}
		
	});
	
	//删除新闻的功能
	var deleteId=null;
	$tableBody.on('click','.btn-danger',function(e){
		$("#deleteModal").modal('show');
//		console.log($(this).parent().prevAll().eq(5).html());
        deleteId=$(this).parent().prevAll().eq(5).html();
	});
	
	$("#deleteModal #comfirmDelete").click(function(e){
		if(deleteId){
			$.ajax({
				url:'admin/delete',
				type:'post',
				data:{newsid:deleteId},
				success:function(data){
					console.log("删除成功");
					$("#deleteModal").modal('hide');
					refreshNews();
				}
			});
		}
	});
	
	//修改新闻的功能
	var updataId=null;
	$tableBody.on('click','.btn-primary',function(e){
		$("#updataModal").modal('show');
        updataId=$(this).parent().prevAll().eq(5).html();
        $.ajax({
				url:'admin/current',
				type:'get',
				data:{newsid:updataId},
				success:function(data){
					$("#unnewstitle").val(updataId);
					$("#unewstitle").val(data[0].newstitle);
					$("#unewstype").val(data[0].newstype);
					$("#unewsimg").val(data[0].newsimg);
					$("#unewssrc").val(data[0].newssrc);
					var utime=data[0].newstime.split('T')[0];
					$("#unewstime").val(utime);
				}
			});
        
	});
	
	$("#updataModal #comfirmUpdata").click(function(e){
		   $.ajax({
				url:'admin/updata',
				type:'post',
				data:{
					newstitle:$("#unewstitle").val(),
					newstype:$("#unewstype").val(),
					newsimg:$("#unewsimg").val(),
					newstime:$("#unewstime").val(),
					newssrc:$("#unewssrc").val(),
					id:$("#unnewstitle").val()
//					id:updataId
				},
				success:function(data){
					$("#updataModal").modal('hide');
					refreshNews();
				}
			});
	});
	
});

//提示插入成功并且清空表单
function tishi(){
	alert("插入成功");
}
function clear(){
	$("#newstitle").val("");
	$("#newstype").val("");
	$("#newsimg").val("");
	$("#newstime").val("");
	$("#newssrc").val("");
	
//  $("#insertform").reset();
}
function refreshNews(){
	var $tableBody=$('#newstable tbody');
		$tableBody.empty();
	$.ajax({
		url:"admin/getnews",
		type:"get",
		datatype:'json',
		success:function(data){
			console.log(data);
			data.forEach(function(item,index,array){
				var $tdid=$("<td>").html(item.id);
				var $tdtype=$("<td></td>").html(item.newstype);
				var $tdtitle=$("<td></td>").html(item.newstitle);
				var $tdimg=$("<td></td>").html(item.newsimg);
				var $tdtime=$("<td></td>").html(moment(item.newstime).format("YYYY-MM-DD h:mm:ss"));
				var $tdsrc=$("<td></td>").html(item.newssrc);
				var $tdcontrol=$("<td></td>");
				var $btnupdata=$("<button></button>").addClass('btn-primary btn-xs').html("修改");
				var $btndelete=$("<button></button>").addClass('btn-danger btn-xs').html("删除");
				$tdcontrol.append($btnupdata,$btndelete);
				var $trRow=$('<tr></tr>');
				$trRow.append($tdid,$tdtype,$tdtitle,$tdimg,$tdsrc,$tdtime,$tdsrc,$tdcontrol);
				$tableBody.append($trRow);
			});
		}
	});
}

//获取当前时间的方法
function getNowFormatDate() {
    var date = new Date();
//  var seperator1 = "/";
    var seperator2 = ":";
    var currentTime=date.getHours() + seperator2 + date.getMinutes()
         + seperator2 + date.getSeconds();
    return currentTime;
//  var month = date.getMonth() + 1;
//  var strDate = date.getDate();
//  if (month >= 1 && month <= 9) {
//      month = "0" + month; 
//  }
//  if (strDate >= 0 && strDate <= 9) {
//      strDate = "0" + strDate;
//  }
//  var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
//          + " " + date.getHours() + seperator2 + date.getMinutes()
//          + seperator2 + date.getSeconds();
//  return currentdate;
    
    
} 

//匹配时间格式的正则表达式
function IsDate(num){
var regexp = /^([1][7-9][0-9][0-9]|[2][0][0-9][0-9])(\-)([0][1-9]|[1][0-2])(\-)([0-2][1-9]|[3][0-1])()([0-1][0-9]|[2][0-3])(:)([0-5][0-9])(:)([0-5][0-9])$/g; 　
　　　　 return regexp.test(this);
}