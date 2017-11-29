jQuery(document).ready(function($) {

  var slider = $('.slides').unslider({
    autoplay: true,
    delay: 6666
  });

  if (window.document.body.clientWidth<750) marginr="-35%"; else marginr="5%";
  $("#slide0>.slideWord").animate({marginRight:marginr},200);
  slider.on('unslider.change', function(event, index, slide) {
    //$(".slideWord").hide();
    $(".slideWord").css({marginRight:"100%"});
    $(".slideWord").addClass("hide");
    $("#slide"+index+">.slideWord").removeClass("hide");
  	$("#slide"+index+">.slideWord").animate({marginRight:marginr},200);
  });

});
