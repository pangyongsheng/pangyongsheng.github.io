$(function(){
	$("#navigation li").each(function(){
		if(this.className.indexOf("current_page")==-1){
			$(this).find("a").css("left","-280px");
			$(this).hover(function(){
				//alert($("a",this));
				$(this).find("a").animate({left:"0px"},"fast");
			},function(){
				$(this).find("a").animate({left:"-280px"},"fast");
			})
		}
	})
})