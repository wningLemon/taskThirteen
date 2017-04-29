$(document).ready(function(){
	$(".choice-a").click(function(){
		if($(".choice-div").is(":visible")){
			$(".choice-text").text("图片筛选");
			$(".choice-arrow").show();
		}else{
			$(".choice-text").text("取消筛选");
			$(".choice-arrow").hide();
		}
		$(".choice-div").toggle();
	});
	
	//实现瀑布流
	$(window).on('load',function(){
		imgLoaction();
		var dataImg = {"data":[{"src":"./img/image_1.jpg"},{"src":"./img/image_2.jpg"},{"src":"./img/image_3.jpg"},{"src":"./img/image_4.jpg"},{"src":"./img/image_5.jpg"}]};
		window.onscroll=function(){
			if(scrollSide()){
//				alert("a");//为什么会出现两次
				$.each(dataImg.data, function(index,value) {
					var box=$("<div>").addClass("box").appendTo($(".container"));
	                var content=$("<div>").addClass("content").appendTo(box);
	                 console.log($(value).attr("src"));
					$("<img>").attr("src",$(value).attr("src")).appendTo(content);
				});
		imgLoaction();
			}
		};
		
		window.onresize=function(){
			imgLoaction();
		};
	});
});

function scrollSide(){
	var box=$(".box");
	var lastBoxHeight=box.last().get(0).offsetTop+Math.floor(box.last().height()/2);
	var documentHeight=$(document).height();
	var scrollHeight=$(window).scrollTop();
	return (lastBoxHeight<documentHeight+scrollHeight)?true:false;
	
}

function imgLoaction(){
	var box=$(".box");
	var boxWidth=box.eq(0).width();
	var num=Math.floor($(window).width()/boxWidth);
	var conWidth=boxWidth*num;
	$(".container-con").css("width",conWidth+"px");
	var containerHeight=$(document).height();
	$(".container").css("height",containerHeight+'px');
	var boxArr=[];//数组盛放盒子的高度
	box.each(function(index,value){
		value.style.cssText='';
		var boxHeight=box.eq(index).height();//获取每个盒子的高度
		if(index<num){//如果是第一排的盒子将放在数组里
			boxArr[index]=boxHeight;
		}else{
			var minBoxHeight=Math.min.apply(null,boxArr);
//			console.log(minBoxHeight);
			var minBoxIndex=$.inArray(minBoxHeight,boxArr);
			$(this).css({
				'position':'absolute',
				'top':minBoxHeight+10,
				'left':box.eq(minBoxIndex).position().left
			});
			boxArr[minBoxIndex]+=box.eq(index).height();
		}
		
	});
}
