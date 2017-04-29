window.onload = function() {
	var Height = document.documentElement.clientHeight;
	var oDiv = document.getElementById('moreDiv');
	oDiv.style.height = Height + 'px';
};

function ahover() {
	var oUl = document.getElementById('setDiv');
	oUl.style.display = 'block';
}

function release() {
	var oUl = document.getElementById('setDiv');
	oUl.style.display = '';
}

function show() {
	var oDiv = document.getElementById('moreDiv');
	oDiv.style.display = 'block';
}

function hide() {
	var oDiv = document.getElementById('moreDiv');
	oDiv.style.display = '';
}