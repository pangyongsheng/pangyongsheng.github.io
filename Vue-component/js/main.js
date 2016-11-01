var page=page||{};

page.op=document.getElementById('intro');
page.b1=document.getElementById('bt_ht');
page.b2=document.getElementById('bt_cs');
page.b3=document.getElementById('bt_js');
page.b4=document.getElementById('bt_tx');

page.init=function(){
	a=page.getnew();
	this.newp=page.remin(a);
	page.insert(this.newp,'e');
	var _this=this;
	this.b1.onclick=function(){ page.insert(_this.newp,'h'); };
	this.b2.onclick=function(){ page.insert(_this.newp,'c'); };
	this.b3.onclick=function(){ page.insert(_this.newp,'j'); };
	this.b4.onclick=function(){ page.insert(_this.newp,'e'); };
}
page.scollChange=function(){
	var a,b;
	var timer=setTimeout(function(){
		a=page.getnew();
		b=page.remin(a);
		page.insert(b,'e');
	},500);
}
page.getnew=function(){
	var unit=document.getElementsByClassName('unit');
	var temp=[];
	for(var i=0;i<unit.length;i++){
		var mTop =unit[i].offsetTop;
		var sTop = document.body.scrollTop;
		var result = mTop - sTop;
		if(result<0){
			result=-result;
		}
		temp.push(result);
	}
	return temp;
}
page.remin=function(arr){
	var temp=arr[0];
	var index=0;
	for(var i=0;i<arr.length;i++){
		if(arr[i]<temp){
			temp=arr[i]
			index=i;
		}
	}
	return index;
}
page.insert=function(ind,cl){
	this.op.innerHTML=intro[ind][cl];
}
window.onload=function(){
	page.init();
	
};
if (document.addEventListener) 
	{
        document.addEventListener('DOMMouseScroll', page.scollChange, false);
		//alert("dom");
    }
window.onmousewheel=document.onmousewheel=page.scollChange;	


