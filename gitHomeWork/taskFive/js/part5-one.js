function judge(){
				var val=document.getElementById('score').value;	
				var str;

//				判断是否为空
				if(!val.trim()){
					alert("输入为空，请输入0-100的数字");
					return;
				}						
				switch(true){
					case (val>=90&&val<=100):
						str="一等生";
					    break;
				    case (val>=80&&val<90):
						str="二等生";
					    break;
				    case (val>=70&&val<80):
						str="三等生";
					    break;
				    case (val>=60&&val<70):
						str="四等生";
					    break;
				    case (val>=50&&val<60):
						str="五等生";
					    break;
				    case (val>=40&&val<50):
						str="六等生";
					    break;
				    case (val>=30&&val<40):
						str="七等生";
					    break;
				    case (val>=20&&val<30):
						str="八等生";
					    break;
				    case (val>=10&&val<20):
						str="九等生";
					    break;
					case (val>=0&&val<10):
						str="十等生";
						break;
					case(val<0||val>100):
						alert("请输入0-100之间的分数");
						str="无法判断";
						break;
						//判断非数字类型
					default:
						alert("输入错误,请输入0-100之间得分数");
						str="无法判断";
						break;
				}	
			  document.getElementById('rank').innerHTML=str;
			}