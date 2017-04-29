$(document).ready(function(){

	//课程列表的hover事件
//	$(".course-tile ul li").each(function(index){
//		$(this).hover(function(){
//			$(".course-tile .subject-intro").eq(index).slideToggle(500);
//		});
//	});
	
	//收藏按钮点击
	$(".shoucang-icon").each(function(index){
		$(this).click(function(){
			$(".shoucang-icon").eq(index).css({
				background:"url(img/shoucang-2.png)",
				backgroundSize:"16px 16px"
			});
		});
	});
	
	//打开搜索输入框
	$(".search-btn").click(function(){
//		$(".search-div").show();
//		$(".search-div").fadeIn(500);
		$(".search-div").css({
			'opacity':1,
			'transform': 'scale(1, 1)'
		});
	});
	
	//关闭搜索输入框
	$(".close-icon").click(function(){
//		$(".search-div").hide();
		$(".search-div").css({
			'opacity':0,
			'transform': 'scale(0.1, 1)'
		});
	});
	
	//更改布局的显示效果
	$("#pp").click(function(){
		$(".course-tile").show();
		$(".course-list").hide();
	});
	
	$("#ll").click(function(){
		$(".course-tile").hide();
		$(".course-list").show();
	});
	
	//页面左侧菜单的hover事件
	$(".fl li div").each(function(index){
		$(this).hover(function(){
			$(".left-show").hide();
			$(".left-show").eq(index).show();
		});
	});
	
	$(".left-show").each(function(){
		$(this).mouseleave(function(){
			$(".left-show").hide();
		});
	});
	
	$(".left-top").mouseleave(function(){
		$(".left-show").hide();
	});
	
    //回到页面顶部	
    $(".gotop-btn").click(function(){
        $('body,html').animate({scrollTop:0},500); 
    });
    
    //获取滚动条滚动的距离
    $(window).scroll(function(){
    	 if($(document).scrollTop()>0){
	    	$(".gotop-btn").css("visibility","visible");
	    }else{
	    	$(".gotop-btn").css("visibility","hidden");
	    }
    });
});
