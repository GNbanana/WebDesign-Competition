jQuery(document).ready(function($) {

  function show(){
      var mychar=document.getElementById("wxpic");
      mychar.style.display="block";
  }
  function miss(){
      var char=document.getElementById("wxpic");
      char.style.display="none";
  }
  new CBPGridGallery( document.getElementById( 'grid-gallery' ) );
});
