//冒泡排序
function bubSort(arr){
	for(var i=0;i<arr.length-1;i++){
		for(var j=0;j<arr.length-1-i;j++){
				if(arr[j]>arr[j+1]){
					var tmp;
					tmp = arr[j];
					arr[j] = arr[j+1];
					arr[j+1] = tmp;
				}
		}
	}
	return arr;
}

//选择排序
function selSort(arr){
	for(var i=0;i<arr.length-1;i++){
		for(var j=i;j<arr.length-1;j++){
				if(arr[i]>arr[j+1]){
						var tmp;
						tmp = arr[i];
						arr[i] = arr[j+1];
						arr[j+1] = tmp;
				}
		}
	}
	return arr;
}
//将日期格式转换成字符串
function date1String(date,sign){
	sign = sign==undefined?"/":sign;
	return date.getFullYear()+sign+date.getMonth()+sign+date.getDate()+' '+date.getHours()+sign+date.getMinutes()+sign+date.getSeconds();
} 
//判断是不是只有一位
function isDblNum(item){
	return item = item<10?'0'+item:item;
    }
//获得非行间样式
function getStyle(ele,attr){
	if(ele.currentStyle){
		return ele.currentStyle[attr];
	}else{
		return getComputedStyle(ele,false)[attr];
	}
}
//自定义属性
function attr(ele,eleName,val){
	if(arguments==3){
		if(val =='dele'){
		return ele.removeAttribute(eleName)
		}else{
			return ele.setAttribute(eleName,val);
		}
	}
	if(arguments.length==2){
		return ele.getAttribute(eleName);
	}
	}
//设置cookie
function setCookie(_name,_val,_expires){
	var d = new Date();
	d.setDate(d.getDate()+_expires);
	document.cookie = _name+'='+_val+';path=/;expires='+d.toGMTString();
}

//删除cookie
function removeCookie(_name,_val){
	setCookie(_name,_val,-1);
}

//获取指定cookie
function getCookie(_name){
	var str = document.cookie;
	var arr = str.split('; ');
	var len = arr.length;
	for(var i=0;i<len;i++){
		var newarr = arr[i].split('=');
		if(newarr[0]==_name){
			return newarr[1]
		}
	}
}
//运动框架
function move(obj,json,fn){
	clearInterval(obj.timer);
	obj.timer=setInterval(function(){
		var bStop = true;
		for(var attr in json){
			//获取到属性值
			var iCur = 0;
			if(attr=='opacity'){
				iCur = parseInt(parseFloat(getStyle(obj,attr))*100)
			}else{
				iCur = parseInt(getStyle(obj,attr));
			}

			//速度
			var speed = 0;
			speed=(json[attr]-iCur)/8;
			speed = speed>0?Math.ceil(speed):Math.floor(speed);
			if(iCur!=json[attr]){
				bStop=false;
			}

			if(attr=='opacity'){
					obj.style.filter='alpha(opacity:'+(iCur+speed)+')';
					obj.style.opacity=(iCur+speed)/100;
			}else{
				obj.style[attr] = iCur+speed+'px';
			}
			
		}
		if(bStop){
			clearInterval(obj.timer);
			if(fn){
				fn();
			}
		}
	},30)
}
//随机颜色
function randomColor(){
	var str = Math.round((Math.random()*0xffffff)).toString(16);
	return '#'+str; 
}