str = '';

function show(numstr) {
	str += numstr.value;
	document.getElementById('text').innerHTML = str;
}

function calculate() {
	document.getElementById('text').innerHTML = '';
	var result = eval(str);
	result += '';
	if(result.indexOf(".") > 0) {
		var a = result.indexOf(".");
		result = result.substr(0, a + 3);
	}
	document.getElementById('text').innerHTML = result;
	str = result;
}

function cancel() {
	str = '';
	document.getElementById('text').innerHTML = 0;
}

function del() {
	str = str.substring(0, str.length - 1);
	document.getElementById('text').innerHTML = str;
}
//			function ce(){
//				var len=str.length;
//				for(var i=len;i>0;i++)
//				{
//					
//				}
//				var num=str.indexOf('+')||str.indexOf('-')||str.indexOf('*')||str.indexOf('/');
//				alert(num);
//				str=str.substring(0,num+1);
//				document.getElementById('text').innerHTML=str;
//			}