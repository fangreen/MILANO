window.onload = function(){
var oul = document.getElementById('ul');
var oli1 = oul.children;
var odir=document.getElementById("direction");
var oda = odir.children;
var obanner=document.getElementById("banner");
var obtn=document.getElementById("btn");
var oa = obtn.children;
function a(obj,obj1,speed,opacit){
	obj.mouseover(function(){
		obj1.stop(true).fadeTo(speed,opacit);	
	})
}
function b(obj,obj1,speed,opacit){
	obj.mouseout(function(){
		obj1.stop(true).fadeTo(speed,opacit);	
	})	
}
a($("#banner"),$("#direction>a"),300,0.5);
b($("#banner"),$("#direction>a"),300,0);
var timer=null;
var onow = 0;
var next = 0;
	oda[1].onclick = function(){
		if(next==oli1.length-1){
			next=0;
		}else{
			next++;
		}
		tab();
	 }
	oda[0].onclick = function(){
		if(next==0){
			next=oli1.length-1;
		}else{
			next--;
		}
			tab();
		}
	function tab(){
		move(oli1[onow],{"opacity":0});
		move(oli1[next],{"opacity":100});
		onow=next;
		for(var i=0;i<oa.length;i++){
			oa[i].className='';
		}
			oa[next].className="active";
			onow=next;
		}
		for(var i=0;i<oa.length;i++){
			oa[i].index=i;
			oa[i].onclick = function(){
				next=this.index;
				tab();
			}
	}
	autoplay();
	function autoplay(){
		clearInterval(timer);
		timer=setInterval(function(){
			if(next==oli1.length-1){
				next=0;
			}else{
				next++;
			}
			tab();
		},3000)
	}
	obanner.onmouseover = function(){
		clearInterval(timer);
	}
	obanner.onmouseout = function(){
		autoplay();
	}
//小轮播图
var oul1 = document.getElementById("ul1");	
var oli2=oul1.children;
var timer1 = null;
var opro1main = oul1.parentElement;
var l=0;
var op_dh=document.getElementsByClassName("p_dh");
var opc=op_dh[0].children;
var cli1=oli2[0].cloneNode(true);
var cli2=oli2[1].cloneNode(true);
var cli3=oli2[2].cloneNode(true);
var cli4=oli2[3].cloneNode(true);
var cli5=oli2[4].cloneNode(true);
oul1.appendChild(cli1);
oul1.appendChild(cli2);
oul1.appendChild(cli3);
oul1.appendChild(cli4);
oul1.appendChild(cli5);
oul1.style.width=oli2[0].offsetWidth*oli2.length+20*oli2.length+'px';
autoplay1();
function autoplay1(){
	clearInterval(timer1);
	timer1 = setInterval(function(){
        l+=0.3;
        if(l>=oli2[0].offsetWidth*(oli2.length-5)+20*(oli2.length-5)){
			l=0;
	    }
        oul1.style.left=-1*l+'px';
	},10)
	opro1main.onmouseover = function(){
		clearInterval(timer1);
    }
	opro1main.onmouseout = function(){
		autoplay1();
   }
}
opc[0].onmouseover = function(){
		autoplay1();
	}
function autoplay2(){
		clearInterval(timer1);
		timer1 = setInterval(function(){
			l-=0.3;
			if(l<=0.3){
				l=1*oli2[0].offsetWidth*(oli2.length-5)+20*(oli2.length-5);
			}
	        oul1.style.left=-1*l+'px';
		},10)
		opro1main.onmouseover = function(){
		clearInterval(timer1);
	    }
		opro1main.onmouseout = function(){
			autoplay2();
	   }
	}
    opc[1].onmouseover = function(){
		autoplay2();
	}
}



