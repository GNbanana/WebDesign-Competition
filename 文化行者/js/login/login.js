jq110(document).ready(function() {
	Login.init();
	Show.init();
	
})

var Login = function() {
	var handleRegister=function(){
		$.formValidator.initConfig({
			formid:"register_form",
			debug:false,
			submitonce:true,
			onerror:function(msg,obj,errorlist){
				//$.map(errorlist,function(msg1){alert(msg1)});
				alert(msg);
			}
		});
		//注册
		$("#t_UserName").formValidator({
			onShow:"用户名：5-10个字符",
			onfocus:"用户名：5-10个字符",
			oncorrect:"该用户名可以注册"
				}).inputValidator({
					min:5,max:10,onerror:"用户名输入有误"}).regexValidator({regexp:"username",datatype:"enum",onerror:"用户名格式有误"});
		$("#t_UserPass").formValidator({
			onShow:"密码至少6个字符",
			onfocus:"密码至少6个字符",
			oncorrect:"密码合法"
				}).inputValidator({min:6,empty:{leftempty:false,rightempty:false,emptyerror:"密码输入有误"},onerror:"密码输入有误"
					});
		$("#t_RePass").formValidator({
			onShow:"请再次输入密码",
			onfocus:"请再次输入密码",
			oncorrect:"密码一致"
				}).inputValidator({min:6,empty:{
					leftempty:false,rightempty:false,emptyerror:"密码输入有误"
						},
						onerror:"密码输入有误"}).compareValidator({desid:"t_UserPass",operateor:"=",onerror:"密码不一致"
							});	
	};
	
	return {
        init: function() {
            handleRegister();
        }
    };
}();
/* ================================================================================ */
//关于页面的控件生成等操作都放在Page里，和Record独立，Record主要是和记录集交互
var Show = function() {
	var storage=window.localStorage;
	var initPageStyle = function() {
		var user=storage["user"];
		if(user!=null && user!=""){
			$('#login_id').hide();
			$("#welcome").html("欢迎您:"+user);
			$('#welcome_id').show();
			$('#logout_id').show();
		}
		else{
			$('#welcome_id').hide();
			$('#logout_id').hide();
		}
		//窗口水平居中
		jq110(window).resize(function(){
			tc_center();
		});
		jq110(".top_nav").mousedown(function(e){ 
			jq110(this).css("cursor","move");//改变鼠标指针的形状 
			var offset = jq110(this).offset();//DIV在页面的位置 
			var x = e.pageX - offset.left;//获得鼠标指针离DIV元素左边界的距离 
			var y = e.pageY - offset.top;//获得鼠标指针离DIV元素上边界的距离 
			jq110(document).bind("mousemove",function(ev){ //绑定鼠标的移动事件，因为光标在DIV元素外面也要有效果，所以要用doucment的事件，而不用DIV元素的事件 
			
				jq110(".popup").stop();//加上这个之后 
				
				var _x = ev.pageX - x;//获得X轴方向移动的值 
				var _y = ev.pageY - y;//获得Y轴方向移动的值 
			
				jq110(".popup").animate({left:_x+"px",top:_y+"px"},10); 
			}); 
		}); 
		jq110(document).mouseup(function() { 
			jq110(".popup").css("cursor","default"); 
			jq110(this).unbind("mousemove"); 
		});	
	};
	
	var tc_center=function(){
		var _top=(jq110(window).height()-jq110(".popup").height())/2;
		var _left=(jq110(window).width()-jq110(".popup").width())/2;	
		jq110(".popup").css({top:_top,left:_left});
	}
	
	
	var handleButtonEvent=function(){
		//登陆/注册
		jq110("#login_id").click(function(){
			jq110('#humanity_id').removeClass('active');
			jq110('#login_id').addClass('active');
			showLogin();closeRegister();
		});
		jq110("a#close-login").click(function(){closeLogin();});
		jq110("#register-btn").click(function(){showRegister();closeLogin();});
		jq110("a#close-register").click(function(){closeRegister();});

		jq110('#register_bt').click(function(){
			register();
		});
		jq110('#login_bt').click(function(){
			login();
		});
		jq110('#logout_id').click(function(){
			storage.clear();
			location.replace(location.href);
		});
	}

	var register=function(){
		var db = openDatabase('testUser', '1.0', 'Test User', 2 * 1024 * 1024);
        var name=$('#t_UserName').val();
        var password=$('#t_UserPass').val();
        var passwd=$('#t_RePass').val();
        if(name!=null && name!="" && password!=null && password!=""){
           if(password==passwd){
          db.transaction(function (context) {
           context.executeSql('CREATE TABLE IF NOT EXISTS testTable (name unique, password)');
           context.executeSql("INSERT INTO testTable (name, password) VALUES ('"+name+"','"+password+"')");

           db.transaction(function (context) {
            context.executeSql('SELECT * FROM testTable', [], function (context, results) {
            var len=results.rows.length,i;
               for (i = 0; i < len; i++){
               	if(name.equals(results.rows.item(i).name)){
               		alert("用户名已存在！");
               		return;
               	}
              }

            });
           });
           alert("注册成功请登录");
			closeRegister();
			showLogin();
         });
    	}
    	 else{
    	 	alert("密码不一致！");
    	 }
   		}
    	else{
    		alert("用户名密码不能为空！");
    	}
	};

	var login=function(){
		var userName=$("#user_name").val();
		var userPw=$("#user_password").val();
		if(userName!=null && userName!="" && userPw!=null && userPw!=""){
		 var db = openDatabase('testUser', '1.0', 'Test User', 2 * 1024 * 1024);
		 db.transaction(function (context) {
            context.executeSql('SELECT * FROM testTable', [], function (context, results) {
           		 var len2=results.rows.length,j;
            		for (j = 0; j < len2; j++){
            			var nn=results.rows.item(j).name;
            			var pp=results.rows.item(j).password;
            			if(nn==userName){
           					if(pp==userPw){
								alert("登录成功");
								closeLogin();
								storage["user"]=pp;
								location.replace(location.href);
								return;
							}
							else{
							  alert("用户名或密码错误1！");
							  return;
							}
               			}
           			}
            		alert("用户名或密码错误2！");
            });
         });
    	}
    	else{
    		alert("用户名或密码不能为空");
    	}

	};

	var showLogin=function(){
        jq110("#gray-login").show();
		jq110("#popup-login").show();//查找ID为popup的DIV show()显示#gray
		tc_center();	
    };
    var closeLogin=function(){
      //点击关闭按钮
		jq110("#gray-login").hide();
		jq110("#popup-login").hide();//查找ID为popup的DIV hide()隐藏
		jq110('#user_name').val("");
		jq110('#user_password').val("");
    };
	
    var showRegister=function(){
    	jq110("#gray-register").show();
 		jq110("#popup-register").show();//查找ID为popup的DIV show()显示#gray
 		tc_center();	
    };
    var closeRegister=function(){
        //点击关闭按钮
        Login.init();
  		jq110("#gray-register").hide();
  		jq110("#popup-register").hide();//查找ID为popup的DIV hide()隐藏
  		jq110('#t_UserName').val("");
  		jq110('#t_UserPass').val("");
  		jq110('#t_RePass').val("");
    };
    
	return {
		init: function() {
			initPageStyle();
			handleButtonEvent();
			tc_center();
		},
		showLogin:function(){
			showLogin();
		},
		closeLogin:function(){
			closeLogin();
		},
		showRegister:function(){
			showRegister();
		},
		closeRegister:function(){
			closeRegister();
		},
		register:function(){
			register();
		},
		login:function(){
			login();
		}
	}
}();//Page