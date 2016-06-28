window.onload=function on()
{
	var step=0;
	var tem=[0,1,2,3,4,5,6,7,8];
	var pos_ran=[];
	var img_=1;
	var oBlock=document.getElementsByClassName("block");
	var oOrder=document.getElementsByClassName("order");
	var oBtn_c=document.getElementById("change");
	var oBtn_r=document.getElementById("reset");
	var oBtn_s=document.getElementById("showNum");
	var oBtn_p=document.getElementById("prompt");
	var oDivSu=document.getElementById("success");
	var oBtn_Su=document.getElementById("successB");
	var oSpan_Step=document.getElementById("step");
	var oSucc_Step=document.getElementById("suc_step");
	var place=[[0,0],[0,1],[0,2],[1,0],[1,1],[1,2],[2,0],[2,1],[2,2],];
	
	blockOnload();		//module initialization
	
	for(i=0;i<9;i++)		//add events for block
	{
		oBlock[i].onclick=function()
		{
			var newT=aBlock[this.index].plac[0];
			var newL=aBlock[this.index].plac[1]
			
			if(newL==aBlock[8].plac[1] && newT+1==aBlock[8].plac[0])	//down
			{
				aBlock[this.index].plac[0]++;
				aBlock[this.index].init();
				aBlock[8].plac[0]--;
				step++;
				oSpan_Step.innerHTML=step;
			}
			else if(newL==aBlock[8].plac[1] && newT-1==aBlock[8].plac[0])	//up
			{
				aBlock[this.index].plac[0]--;
				aBlock[this.index].init();
				aBlock[8].plac[0]++;
				step++;
				oSpan_Step.innerHTML=step;
			}
			else if(newT==aBlock[8].plac[0] && newL+1==aBlock[8].plac[1])	//right
			{
				aBlock[this.index].plac[1]++;
				aBlock[this.index].init();
				aBlock[8].plac[1]--;
				step++;
				oSpan_Step.innerHTML=step;
			}
			else if(newT==aBlock[8].plac[0] && newL-1==aBlock[8].plac[1])	//left
			{
				aBlock[this.index].plac[1]--;
				aBlock[this.index].init();
				aBlock[8].plac[1]++;
				step++;
				oSpan_Step.innerHTML=step;
			}
			//check success
			for(var j=0;j<9;j++)
			{
				var a=aBlock[j].cheack();
				if(!a)	
				{
					console.log("第"+j+"个");
					break;
				}
				else if(j==7) 
				{
					console.log("从"+j+"个");
					aBlock[8].init();
					oBlock[8].style.display="block";
					oDivSu.style.display="block";
					oSucc_Step.innerHTML=step;
				}
			}
			
		}
	}
	//module initialization
	function blockOnload()
	{
		pos_ran=roa(tem);
		for(i=0;i<9;i++)
		{
			oBlock[i].index=i;
			var temp_a=place[i][0];
			var temp_b=place[i][1];
			aBlock[i]=new createBlock(i,place[pos_ran[i]],[temp_a,temp_b]);
			aBlock[i].init();
		}
	}
	//switch picture
	oBtn_c.onclick=function(){
		if(img_==7) img_=1;
		else	img_++;
		for(var i=0;i<9;i++)
		{	
			oBlock[i].style.backgroundImage="url(./images/img_"+img_+".jpg)";
		}
	}
	//reset
	oBtn_r.onclick=oBtn_Su.onclick=function(){
		on();
		oDivSu.style.display="none";
		oBlock[8].style.display="none";
		step=0;
		oSpan_Step.innerHTML=step;
	}
	//show or hidden order
	oBtn_s.onclick=function(){
		 if (getStyle(oOrder[0],"display")=="block") {
			 for(var i=0;i<9;i++){
				 oOrder[i].style.display = "none";
			 } 
			 oBtn_s.innerHTML="显示序号";
        } 
		else if ( oOrder[1].style.display == "none") {
             for(var i=0;i<9;i++){
				 oOrder[i].style.display = "block";
			 }  
			  oBtn_s.innerHTML="隐藏序号";
        }
		}
		
	//onload
}
var aBlock=[];
var complete=[];
//constructed function
function createBlock(int_id,arr_pla,arr_pur){
	this.id=int_id;
	this.plac=arr_pla;
	this.purp=arr_pur;
	this.obj=document.getElementById("block_"+int_id);
}
//position initialization
createBlock.prototype.init=function()
{
	 startMove(this.obj,
	 {
		"top":this.plac[0]*100+"",
		"left":this.plac[1]*100+"",
	 }) 
}
//Check the target position and the current position
createBlock.prototype.cheack=function()
{
	var a=this.plac.toString();
	var b=this.purp.toString();
	console.log(this.id+a+" , "+b);
	if(a==b) return true;
	else return false;
}
//
createBlock.prototype.distance=function()
{
	var plT=this.plac[0];
	var plL=this.plac[1];
	var puT=this.purp[0];
	var puL=this.purp[1];
	
}
//

//get random number
function roa(ar)
{
   var arr=ar;
   var temp=new Array();
	var count=arr.length;
    for (i=0;i<count;i++)
    { 
        var num=Math.floor(Math.random()*arr.length); 
        temp.push(arr[num]);
        arr.splice(num,1);
    }
    return temp;
}
