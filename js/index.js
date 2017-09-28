	    var onav = document.getElementById("nav");
		var oli = onav.children;
		var obgs = document.getElementById('bgs');
		var obgs2 = document.getElementById('bgs2');
		   
		   for(var i=0;i<oli.length;i++){
			oli[i].index=i;
			oli[i].onmouseover = function(){
				for(var j=0;j<oli.length;j++){
					oli[j].className='';
			       }
				obgs.style.display='none';
				obgs2.style.display='none';
				oli[this.index].className="on";
				if(this.index==2){
					obgs2.style.display='block';
				}
				if(this.index==1){
					obgs.style.display='block';
				}
			}
			oli[i].onmouseout = function(){
				oli[this.index].className=" ";
			}
//			onav.onmouseout=function(){
//				oli[0].className='on';
//			}
			obgs.onmouseover = function(){
				obgs.style.display='block';
				oli[1].className='on';
				oli[0].className='';
			}
			obgs2.onmouseover = function(){
				obgs2.style.display='block';
				oli[2].className='on';
				oli[0].className='';
				oli[1].className='';
			}
			obgs2.onmouseout = function(){
				obgs2.style.display='none';
				oli[2].className='';
			}
			obgs.onmouseout = function(){
				obgs.style.display='none';
				oli[1].className='';
			}
			
		}


	 	
	 
	

 




