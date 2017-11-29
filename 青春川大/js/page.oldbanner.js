var cc1 = $('.card-container-1');
cc1.on('click',function(){
    var disappear = {
      top: '40px',
      opacity: '0'
    },
    appear={
      top:'0',
      opacity:'1'
    };
    var firstCard = cc1.children('.card').first();
    firstCard.css(disappear);
    var x = setTimeout(function(){
      firstCard.css(appear);
      $('.card-container-1').append(firstCard);
    },200);
});
