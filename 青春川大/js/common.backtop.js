jQuery(document).ready(function($) {
  mywindow = $(window);
  $("body").append("<div class='returntop'><a href='#returntop'><span><img src='images/totop.png'></span></a></div>");
  returnbtn = $(".returntop");
  returnbtn.click(function(){
     $('body,html').animate({scrollTop:0},1000);
  });

  mywindow.scroll(function(e) {
      if(mywindow.scrollTop()>300)
          returnbtn.fadeIn();
      else
          returnbtn.fadeOut();
  });
});
