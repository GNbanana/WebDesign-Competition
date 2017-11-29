(function($) {
  "use strict";
  $(window).on("load", function() {

    $("#status").fadeOut();
    $("#preloader").delay(450).fadeOut("slow");
    
    //masonry
    $('.grid').masonry({
      itemSelector: '.grid-item'

    });
  });


  $(document).ready(function(){  

    $(document).on("scroll", onScroll);
 
    $('a[href^="#"]').on('click', function (e) {
      e.preventDefault();
      $(document).off("scroll");
 
      $('a').each(function () {
        $(this).removeClass('active');
      });
      $(this).addClass('active');
 
      var target = this.hash;
      //$target = $(target);
      $('html, body').stop().animate({
        'scrollTop': $target.offset().top+2
      }, 500, 'swing', function () {
        window.location.hash = target;
        $(document).on("scroll", onScroll);
      });
    });

    
    //scroll js
    smoothScroll.init({
      selector: '[data-scroll]', // Selector for links (must be a valid CSS selector)
      selectorHeader: '[data-scroll-header]', // Selector for fixed headers (must be a valid CSS selector)
      speed: 500, // Integer. How fast to complete the scroll in milliseconds
      easing: 'easeInOutCubic', // Easing pattern to use
      updateURL: true, // Boolean. Whether or not to update the URL with the anchor hash on scroll
      offset: 0, // Integer. How far to offset the scrolling anchor location in pixels
      callback: function ( toggle, anchor ) {} // Function to run after scrolling
    });

    //menu
    var bodyEl = document.body,
    content = document.querySelector( '.content-wrap' ),
    openbtn = document.getElementById( 'open-button' ),
    closebtn = document.getElementById( 'close-button' ),
    isOpen = false;

    function inits() {
      initEvents();
    }

    function initEvents() {
      openbtn.addEventListener( 'click', toggleMenu );
      if( closebtn ) {
        closebtn.addEventListener( 'click', toggleMenu );
      }

      // close the menu element if the target it´s not the menu element or one of its descendants..
      content.addEventListener( 'click', function(ev) {
        var target = ev.target;
        if( isOpen && target !== openbtn ) {
          toggleMenu();
        }
      } );
    }

    function toggleMenu() {
      if( isOpen ) {
        classie.remove( bodyEl, 'show-menu' );
      }
      else {
        classie.add( bodyEl, 'show-menu' );
      }
      isOpen = !isOpen;
    }

    inits();


    //typed js
    $(".typed").typed({
        strings: ["My Name is M.Reza", "I'm a Web Designer", "Love Simplicity"],
        typeSpeed: 100,
        backDelay: 900,
        // loop
        loop: true
    });

    //owl carousel
    $('.owl-carousel').owlCarousel({
      autoPlay: 3000, //Set AutoPlay to 3 seconds
 
      items : 1,
      itemsDesktop : [1199,1],
      itemsDesktopSmall : [979,1],
      itemsTablet : [768,1],
      itemsMobile : [479,1],

      // CSS Styles
      baseClass : "owl-carousel",
      theme : "owl-theme"
    });

    $('.owl-carousel2').owlCarousel({
      //autoPlay: 3000, //Set AutoPlay to 3 seconds
      //
      items : 1,
      itemsDesktop : [1199,1],
      itemsDesktopSmall : [979,1],
      itemsTablet : [768,1],
      itemsMobile : [479,1],
      autoPlay : false,

      // CSS Styles
      baseClass : "owl-carousel",
      theme : "owl-theme"
    });

    //contact
    $('input').blur(function() {

      // check if the input has any value (if we've typed into it)
      if ($(this).val())
        $(this).addClass('used');
      else
        $(this).removeClass('used');
    });

    //pop up porfolio
    $('.portfolio-image li a').magnificPopup({
      type: 'image',
      gallery: {
        enabled: true
      }
      // other options
    });
    
    //Skill
    jQuery('.skillbar').each(function() {
      jQuery(this).appear(function() {
        jQuery(this).find('.count-bar').animate({
          width:jQuery(this).attr('data-percent')
        },3000);
        var percent = jQuery(this).attr('data-percent');
        jQuery(this).find('.count').html('<span>' + percent + '</span>');
      });
    }); 

  
  });
  
    
  //header
  function inits() {
    window.addEventListener('scroll', function(e){
        var distanceY = window.pageYOffset || document.documentElement.scrollTop,
            shrinkOn = 300,
            header = document.querySelector(".for-sticky");
        if (distanceY > shrinkOn) {
            classie.add(header,"opacity-nav");
        } else {
            if (classie.has(header,"opacity-nav")) {
                classie.remove(header,"opacity-nav");
            }
          }
      });
    }

  window.onload = inits();

  //nav-active
  function onScroll(event){
    var scrollPosition = $(document).scrollTop();
    $('.menu-list a').each(function () {
      var currentLink = $(this);
      var refElement = $(currentLink.attr("href"));
      if (refElement.position().top <= scrollPosition && refElement.position().top + refElement.height() > scrollPosition) {
        $('.menu-list a').removeClass("active");
        currentLink.addClass("active");
      }
      else{
        currentLink.removeClass("active");
      }
    });

  }

})(jQuery);


$(document).ready(function() {
    $("#little_class").click(function() {
    $("html, body").animate({
      scrollTop: $("#newEntry").offset().top }, {duration: 500,easing: "swing"});
    return false;
  });
      $("#dream_house").click(function() {
    $("html, body").animate({
      scrollTop: $("#services").offset().top }, {duration: 500,easing: "swing"});
    return false;
  });
    $("#life_guide").click(function() {
    $("html, body").animate({
      scrollTop: $("#dream").offset().top }, {duration: 500,easing: "swing"});
    return false;
  });
  $("#about_link").click(function() {
    $("html, body").animate({
      scrollTop: $("#about").offset().top }, {duration: 500,easing: "swing"});
    return false;
  });
  $("#work_link").click(function() {
    $("html, body").animate({
      scrollTop: $("#work").offset().top }, {duration: 500,easing: "swing"});
    return false;
  });
  $("#employement_link").click(function() {
    $("html, body").animate({
      scrollTop: $("#employement").offset().top }, {duration: 500,easing: "swing"});
    return false;
  });

  $("#diet_link").click(function() {
    $("html, body").animate({
      scrollTop: $("#diet").offset().top }, {duration: 500,easing: "swing"});
    return false;
  });

  $("#returnTop").click(function() {
    $("html, body").animate({
      scrollTop: $("#top").offset().top }, {duration: 500,easing: "swing"});
    return false;
  });
});

$(function(){
  refresh_nav();
  refresh_book();
  remove_img();

  $(window).resize(function(){
    refresh_nav();
    refresh_book();
    remove_img();
  })

});

function refresh_nav(){
  if($(window).width() > 700 ){
    var navH = $(".paging_nav").offset().top;
    $(window).scroll(function(){
      var scroH = $(this).scrollTop();

      if(scroH>=navH){
        $(".paging_nav").css({"position":"fixed","top":0,"padding-top":"15px","padding-bottom":"15px","background-color":"rgba(255,255,255,0.7)"});
      }else if(scroH<navH){
        $(".paging_nav").css({"position":"static","padding-top":"80px","padding-bottom":"80px"});
      }
    });

  }
}


function refresh_book(){
  var window_width = $(window).width();
  var book = $(".bb-bookblock");
  book.height(window_width * 959 / 1704);

}

function remove_img(){
  var width =$(window).width();

  if(width < 360){
    $(".paging_list img").css({"display":"none"});
  }else{
    $(".paging_list img").css({"display":"inline-block"});
  }

}

//backgroundMusic button
var music1 = document.getElementById("backgroundMusic1");
music1.pause();

$("#backgroundMusic_btn1").click(function(){
  var music_btn = $("#music_btn1");

  if(music1.paused){
    music1.play();
    music2.pause();
    music_btn.attr("src","./images/music_on.png");
    music_btn.addClass("music_rotate");
  }else{
    music1.pause();
    music_btn.attr("src","./images/music_off.png");
    music_btn.removeClass("music_rotate");
  }
});


var music2 = document.getElementById("backgroundMusic2");
music2.pause();

$("#backgroundMusic_btn2").click(function(){
  var music_btn = $("#music_btn2");

  if(music2.paused){
    music2.play();
    music1.pause();
    music_btn.attr("src","./images/music_on.png");
    music_btn.addClass("music_rotate");
  }else{
    music2.pause();
    music_btn.attr("src","./images/music_off.png");
    music_btn.removeClass("music_rotate");
  }
});








