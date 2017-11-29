jQuery(document).ready(function($) {
  mywindow = $(window);
  navlist = $(".nav_list");
  $(".fix_nav").hide();
  function scroll(delta) {
      var cur_top = mywindow.scrollTop();    //当前滚过的高度
      if ((cur_top > 30)) {
        navlist.removeClass("default");
        $(".fix_nav").fadeIn();
        if (delta > 0) {navlist.addClass("active default");}
        if (delta < 0) {navlist.removeClass("active");}
      } else {navlist.removeClass("active"); navlist.addClass("default");$(".fix_nav").fadeOut();}
      return false;
  }

  if (document.body.clientWidth> 1023) mywindow.bind('mousewheel', function(event, delta){scroll(delta);});
  $(".nav_img").hover(function(){navlist.addClass("active default");});

  ismobnav=0;
  $("#mobnavbtn").click(function(){
    if (ismobnav) {$(".nav_list>ul").removeClass("mobactive"); $(".nav_list").removeClass("active"); ismobnav=0;}
    else {$(".nav_list>ul").addClass("mobactive"); $(".nav_list").addClass("active"); ismobnav=1;}
  });

});
