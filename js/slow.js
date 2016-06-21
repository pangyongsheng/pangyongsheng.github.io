var iNum=11;
$(function(){
	//读取所有图片，插入页面
	for(var i=1;i<=iNum;i++)
		$(document.body).append($("<div><a href='#'><img src='images/"+i.toString()+".jpg'></a></div>"));
	$("div:has(a)").addClass("thumb");
	//根据不同图片设置不同的背景框
	for(var i=0;i<iNum;i++)
	{
		if(1)
		{
			$("div:has(a):eq("+i+")").addClass("ls");
		}
		else
		{
			$("div:has(a):eq("+i+")").addClass("pt");
		}	
	}
	//大图初始化页面
	$("#showPhoto").hide();
	$("#bgblack").css("opacity",0.9);
	
	//单击实现缩略图
	$("div a:has(img)").click(function(){
		$("#showPhoto").css({
			"left":($(window).width()/2-300>20?$(window).width()/2-310:20),
			"top":($(window).height()/2-270>30?$(window).height()/2-270:30)
		}).add("#showPic").fadeIn(400);
		var mySrc=$(this).find("img").attr("src");
		//alert(mySrc);
		//mySrc="photo"+mySrc.slice(mySrc.lastIndexOf("/"));
		//alert(mySrc);
		$("#showPic").find("img").attr("src",mySrc);
		//根据ls/pt调整大图显示位置
		if($(this).parent().hasClass("ls"))
			$("#showPic").find("img").css("marginTop","60px");
		else if($(this).parent().hasClass("pt"))
			$("#showPic").find("img").css("marginTop","0px");
	})
	//close按钮关闭大图
	$("#closeImg").click(function(){
		$("#showPhoto").fadeOut(400);
	})
	//上一张、下一张
	var currentSrc;
	var bMargin;
	$("#prev")
	
//加载标记
})
