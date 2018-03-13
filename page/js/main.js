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
	contentLoad();
//onload over
});
//window resize event
window.onresize = function(){
	var temp2=$("#first").css("display");//是否可见
	if(temp2)	adpaHeight();
}
//function
//scroll event
var scrollFunc=function(ev)
{
	var oEvent=ev||windows.event;
	if (oEvent.wheelDelta) 
	{
		if(oEvent.wheelDelta > 0)
		{
			 $("#menu").show();
			  topUp(); 
		}
		if(oEvent.wheelDelta < 0)
		{
			hidef();
			$("#menu").hide();
			topDown();	
		}
	}
	else if(oEvent.detail)
	{
		if (oEvent.detail< 0)
		{
			 $("#menu").show();
			  topUp();
		}
		if (oEvent.detail> 0)
		{
			hidef();
			$("#menu").hide();
			topDown();
		}
	}
}
//welcome page hidden
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
//adpative Height window
function adpaHeight()
{
	 var bodyHeight = document.documentElement.clientHeight;			//获取当前浏览器宽高
    document.getElementById("first").style.height = (parseInt(bodyHeight)) + 'px';		//设置当前div宽高
}
//right image transition 
function topDown(){
	var oSideR=document.getElementById("side_right");
	var oSideRT=oSideR.offsetTop+20;
	
	startMove(oSideR, 
	{
		"top":"-300"
	})
}
function topUp(){
	var oSideR=document.getElementById("side_right");
	var oSideRT=oSideR.offsetTop+20;
	
	startMove(oSideR, 
	{
		"top":"-600"
	})
}
//text onload by ajax
function contentLoad()
{
	//alert("1");
	ajax('record.json?t='+new Date().getTime(),
		function(str)
		{
			var arr=eval(str);
			for(var i=0;i<arr.length;i++)
			{
				var temp=i+1;
				$("#article_i:eq(0)").clone().appendTo($("#left"));
				$(".article:eq("+temp+")").find("span:eq(0)").html(arr[i].name);
				$(".article:eq("+temp+")").find("span:eq(1)").html(arr[i].time);
				$(".article:eq("+temp+")").find("span:eq(2)").html(arr[i].word);	
			}
		},
		function()
		{
			alert("额 出错啦(⊙o⊙)…");
		}
	);
}
