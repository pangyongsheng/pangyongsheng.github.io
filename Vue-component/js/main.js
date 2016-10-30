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

var intro=[
	{
		e:'左侧为可搜索表格组件，组件参数为表头lo信息，表格信息。用户可以通过输入关键字进行筛选对应的表格行',
		h:'&lt;selecttb :ths="tableHead" :tbdatas="tableData" :tdnames="tableName"&gt;&lt;selecttb&gt;',
		c:'css',
		j:'js'
	},
	{
		e:'左侧为弹窗组件，可通过三个slot插槽注入弹窗头部，主体和尾部信息，从而实现提示、警告、选择等弹窗信息，同时可通过绑定shows属性绑定弹窗的隐藏和显示.',
		h:'<>',
		c:'css',
		j:'js'
	},
	{
		e:'这是一个第3个组件',
		h:'<>',
		c:'css',
		j:'js'
	},
	{
		e:'这是一个第4个组件',
		h:'<>',
		c:'css',
		j:'js'
	},
	{
		e:'这是一个第53个组件',
		h:'<>',
		c:'css',
		j:'js'
	}
]
