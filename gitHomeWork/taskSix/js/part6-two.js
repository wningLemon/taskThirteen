document.body.style.background = getCookie('background');
document.body.style.backgroundSize = 'cover';
document.body.style.backgroundPosition = 'no-repeat';
			
var aShow = document.getElementById('show');
var hideDiv = document.getElementById('left-div2-hide');
aShow.onclick = function() {
	hideDiv.style.display = 'block';
};

//页面左侧图片上的span标签动态更改样式
var leftDiv3 = document.getElementById('left-div3');
var aSpan = leftDiv3.getElementsByTagName('span');
for(var i in aSpan) {
	aSpan[i].onclick = function() {
		for(var m=0;m<aSpan.length;m++){
			aSpan[m].className='';
		}
		this.className = 'span-visited';
	};
}

//页面左侧体育旁边的+号按钮
var addIcon = document.getElementById('add-icon');
var addIconCon = document.getElementById('add-icon-content');
addIcon.addEventListener('click', function() {
	if(addIconCon.style.display == 'none'){
		addIconCon.style.display = 'block';
	}else{
		addIconCon.style.display = 'none';
	}
	
}, false);

//页面左侧
var leftHide = document.getElementById('left-hide');
var pageLeft = document.getElementById('pageLeft');
leftHide.onclick = function() {
	pageLeft.style.display = 'none';
};

//出现皮肤的选择页面
var changebtn = document.getElementById('changeSkin');
var changeDiv = document.getElementById('changeSkin-container');
changebtn.onclick = function() {
	changeDiv.style.display = 'block';
};

//收回皮肤
var cancel = document.getElementById('cancel');
var unuse = document.getElementById('unuse');
cancel.onclick = function() {
	changeDiv.style.display = 'none';
};
unuse.onclick = function() {
	changeDiv.style.display = 'none';
};

//设置皮肤
var arrImg = ["url(img/wm.jpg)", "url(img/ns.jpg)", "url(img/dzd.jpg)", "url(img/nhh.jpg)", "url(img/lt.jpg)", "url(img/ms.jpg)", "url(img/wm.jpg)", "url(img/ns.jpg)", "url(img/dzd.jpg)", "url(img/nhh.jpg)", "url(img/lt.jpg)", "url(img/ms.jpg)"];
var skinUl = document.getElementById('skin-ul');
var aLi = skinUl.getElementsByTagName('li');
var aSelect = document.getElementsByClassName('select');
var now = 0;
for(var i = 0; i < aLi.length; i++) {
	aLi[i].index = i;
	aLi[i].onclick = function() {
		now = this.index;
		aSelect[now].style.visibility = 'visible';
		document.body.style.background = arrImg[now];
		document.body.style.backgroundSize = 'cover';
		document.body.style.backgroundPosition = 'no-repeat';
		for(var j = 0; j < aLi.length; j++) {
			if(j != now) {
				aSelect[j].style.visibility = 'hidden';
			}
		}
	};
}

//点击保存皮肤
var saveBtn = document.getElementById('save');
//var aImg=skinUl.getElementsByClassName('skin-img');
saveBtn.onclick = function() {
	document.body.style.background = arrImg[now];
	document.body.style.backgroundSize = 'cover';
	document.body.style.backgroundPosition = 'no-repeat';
	var addImg = arrImg[now];
	setCookie('background', addImg, 86400);
	changeDiv.style.display = 'none';
};

//取得cookie
function getCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';'); //把cookie分割成组
	for(var i = 0; i < ca.length; i++) {
		var c = ca[i]; //取得字符串
		while(c.charAt(0) == ' ') { //判断一下字符串有没有前导空格
			c = c.substring(1, c.length); //有的话，从第二位开始取
		}
		if(c.indexOf(nameEQ) == 0) { //如果含有我们要的name
			return unescape(c.substring(nameEQ.length, c.length)); //解码并截取我们要值
		}
	}
	return false;
}

//设置cookie
function setCookie(name, value, seconds) {
	seconds = seconds || 0;
	var expires = "";
	if(seconds != 0) { //设置cookie生存时间
		var date = new Date();
		date.setTime(date.getTime() + (seconds * 1000));
		expires = "; expires=" + date.toGMTString();
	}
	document.cookie = name + "=" + escape(value) + expires + "; path=/"; //转码并赋值
}