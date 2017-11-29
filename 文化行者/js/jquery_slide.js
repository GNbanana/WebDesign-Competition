// JavaScript Document
function i_slide(obj,opt){
  var option={
		speed:"5000",//间隔运动时间
		a_speed:"500",//运动时间
		conuntW:"1180",//整体内容宽度
		countH:"530",//整体内容高度
		w1:"800",//大图宽度
		h1:"530",//大图高度
		w2:"190",//小图宽度
		h2:"500"//小图高度  
	  }
  
  var ul=obj.find("ul.slide_img");
  var btn=obj.find(".i_btn");
  var con=ul.find(".on");
  var li=ul.children("li");
  var lion=ul.children("li.on");
  var length=li.length;
  var half=parseInt(length/2);
  var number;
  var T;	
  var start;
	//参数初始化,看是否有新的参数传入，传入则更新初始化设置  
	var opts = $.extend(option, opt || {}); 
	var speed=opts.speed;
	var a_speed=opts.a_speed;
	var conuntW=opts.conuntW;//整体内容宽度
	var countH=opts.countH;//整体内容高度
	var w1=opts.w1;//大图宽度
	var h1=opts.h1;//大图高度
	//大图left
	var left1=(opts.conuntW-opts.w1)/2;
	//大图top
	var top1=(opts.countH-opts.h1)/2;
	var left2=opts.conuntW-opts.w2;//小图left
	//小图top
	var top2=(opts.countH-opts.h2)/2; 
	var w2=opts.w2;//小图宽度
	var h2=opts.h2;//小图高度

  if(length%2==0){
	  half=half-1;
	  }
	
//默认轮播
   clearInterval(T)
  number=parseInt(now_show(li))
  pos_dex(number)
  T= setInterval(function(){
	 ss();
	 pos_dex(number)
	 },speed)
   //重新定位
   
   function pos_dex(N){ 
		var next;
		var z=li.length;
	//	alert(z);
		li.eq(N).attr("class","on"); 
		li.eq(N).find(".icon").show();
	    li.eq(N).siblings("li").find(".bg").hide();
	    li.eq(N).siblings("li").find(".info").hide(); 
		for(i=1;i<=half;i++){
			 //right
			  next=N+i;
			  z=z-i
			  if(next==length){
				  next=0;
				  }
			 li.eq(next).css("z-index",z);
			 li.eq(next).attr("class","right");
			 li.eq(next).animate({"left":left2,"width":w2,"height":h2,"top":top2},a_speed);
			 // li.eq(next).css("z-index",z);
			  //left 
			  var pre=N-i;
			  if(pre==-1){
				  pre=length-1;
			    }
			 li.eq(pre).attr("class","left"); 
			 li.eq(pre).css("z-index",z);
			 // li.eq(pre).css("z-index",z);
			  li.eq(pre).animate({"left":"0px","width":w2,"height":h2,"top":top2},a_speed);
			} 
			//mid
	       if(length%2==0){
			  li.eq(next+1).attr("class","mid");
			 li.eq(next+1).css("z-index",z-2);
			  li.eq(next+1).animate({"left":left2,"width":w2,"height":h2,"top":top2},a_speed);
			  }
		   //li.eq(N).css("z-index",length);
		   li.eq(N).css("z-index",parseInt(length)+3);
		   li.eq(N).animate({"left":left1,"width":w1,"height":h1,"top":top1},a_speed);
	   }
   //当前显示的是第几个图片
  function now_show(chi){
		var now=0;
		for(i=0;i<chi.length;i++){
			var li=chi[i];
			if($(li).hasClass("on")){
				now=i;  
				}  
			}
		  return now;
	}
  //点击前后按钮切换
   var arr=[];
   var flg;
   btn.unbind('click').click(function(){
	   clearInterval(T);
	   number=parseInt(now_show(li));
		var tip=$(this).attr("tip");
		 if(tip==0){
			 //向前
			if(number==0){
				number=length-1;
				}else{
				number=number-1;	
					}
		 }else{
			//向后
			if(number==length-1){
				number=0;
				}else{
				number=number+1;	
					} 
			 }
		 if(!lion.is(":animated")){
			     pos_dex(number);
				 T= setInterval(function(){
				 ss();
				 pos_dex(number)
				 },speed)
			 }	 
		 
		 
	   })
  //鼠标点击
   ul.on("click","li.on .icon",function(){
	    clearInterval(T);
		$(this).hide()
	    $(this).siblings(".info").show();
		$(this).siblings(".bg").show();
	   })
   li.on("click",".info i",function(){  
         $(this).parent(".info").siblings(".icon").show(); 
	     $(this).parent(".info").hide();
		 $(this).parent(".info").siblings(".bg").hide();
		 number=parseInt(now_show(li))
	    setTimeout(function(){
		     T= setInterval(function(){
				 ss();
				 pos_dex(number)
				 },speed)
		   },300);
		   return false;
	  })
   function ss(){
	     number=number+1;
	     if(number==length){
		 number=0;  
		 }
	   }
	
	}