$(function(){

    bg_size();

   $(window).resize(function(){

       bg_size();

   });
});


/* 设置背景图片大小 */
function bg_size(){
    var window_width = $(window).width();
    var window_height = $(window).height();
    var bg_img = $(".bg_img");
    var mask_img =$(".mask_img");
    var mask_middle = $(".mask_middle");

    var mask_middle_width = mask_middle.width();

    mask_middle.height(mask_middle_width);
    mask_middle.css("margin-top","-" + mask_middle_width / 2 + "px");

    bg_img.width(window_width);
    bg_img.height(window_height);
    mask_img.width(window_width);
    mask_img.height(window_height);
}


$(function(){

    /* 鼠标悬浮效果 */
    $(".bg_list").hover(function(){
        $('.bg_outside',this).stop().animate({
            top:'-100%'
        },800);
    },function(){
        $('.bg_outside',this).stop().animate({
            top:'0'
        },800);
    });

    /* 首页点击效果 */
    $(".mask_middle").click(function(){
        $(this).stop().animate({
            opacity:"0"
        },2000);
        $(".mask_left").stop().animate({
            left:"-50%"
        },2000);
        $(".mask_right").stop().animate({
            right:"-50%"
        },2000,function(){
            $(".bg_list").css("z-index","100");
        });

    });
});


