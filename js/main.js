$(function(){
	adpaHeight();
	 $("#typed").typed({
        strings: ["Hi,Welcome you to come here"],
        typeSpeed: 0
      });
	//menu show and hide
	$("#menu").hide();
	//get mouse scroll event
	if (document.addEventListener) 
	{
        document.addEventListener('DOMMouseScroll', scrollFunc, false);
		//alert("dom");
    }
		window.onmousewheel=document.onmousewheel=scrollFunc;	
	$("#wel_icon").click(function(){
		 hidef();
	})
	//nav link hidden and visibility
	$(".menu>li>a").mouseover(function()
	{
		var a=$("a").index(this);
		//alert(a);
		$("#menu_e li:eq("+a+")").css("visibility","visible");
		//alert(b);
	});
	$(".menu>li>a").mouseout(function()
	{
		$("#menu_e li").css("visibility","hidden");
	});
	$("#head").mouseover(function(){
		$("#menu").show();
	});
//
});
window.onresize = function(){
	var temp2=$("#first").css("display");//是否可见
	if(temp2)	adpaHeight();
}
var scrollFunc=function(ev)
{
	var oEvent=ev||windows.event;
	if (oEvent.wheelDelta) 
	{
		if(oEvent.wheelDelta > 0)
		{
			 $("#menu").show();
			 
		}
		if(oEvent.wheelDelta < 0)
		{
			hidef();
			$("#menu").hide();
			
		}
	}
	else if(oEvent.detail)
	{
		if (oEvent.detail< 0)
		{
			 $("#menu").show();
		}
		if (oEvent.detail> 0)
		{
			hidef();
			$("#menu").hide();
		}
	}
}	
function hidef()
{
	var first=document.getElementById("first");
	startMove(first, 
	{
		"width":"0",
		"height":"0",
		"opacity":"0",
	})
}
function adpaHeight()
{
	 var bodyHeight = document.documentElement.clientHeight;			//获取当前浏览器宽高
    document.getElementById("first").style.height = (parseInt(bodyHeight)) + 'px';		//设置当前div宽高
}