$(document).ready(function(){
	freshenNews("精选");
	$("nav a").click(function(e){
		e.preventDefault();
		$("nav a").removeClass('active');
		$(this).addClass('active');
		var type=$(this).text();
		freshenNews(type);
	});
	
});

function freshenNews(type){
	var $lists=$(".news-lists");
	$lists.empty();
	$.ajax({
		url:"/index",
		type:"get",
		datatype:'json',
		data:{newstype:type},
		success:function(data){
			console.log(data);
			data.forEach(function(item,index,array){
				var $list=$('<li></li>').addClass('news-list').appendTo($lists);
				var $newsimg=$('<div></div>').addClass('newsimg').appendTo($list);
				var $img=$('<img/>').attr('src',item.newsimg).appendTo($newsimg);
				var $newscontent=$('<div></div>').addClass('newscontent').appendTo($list);
				var $h1=$('<h1></h1>').html(item.newstitle).appendTo($newscontent);
				var $p=$('<p></p>').appendTo($newscontent);
				var $newstime=$('<span></span>').addClass('newstime').html(moment(item.newstime).format("YYYY-MM-DD h:mm:ss")).appendTo($p);
				var $newssrc=$('<span></span>').addClass('newssrc').html(item.newssrc).appendTo($p);
			});
		}
	});
}
