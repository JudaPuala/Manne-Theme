$(document).ready(function(){

//
  $(window).scroll(function() {
    if($(document).scrollTop() > 100) {
      $('.ui_nav_menu').addClass('ui-sticky');
    }
    else {
    $('.ui_nav_menu').removeClass('ui-sticky');
    }
  });


   
 

    /*
   *   Background parallax effect
   **/

$(function(){
    //cache the window object
    var $window = $(window);
    //Parallax background effect
    $('section[data-type="background"]').each(function(){
    //assigning object 
    var $bgobj = $(this);
    $(window).scroll(function(){
        //scroll the background at var speed
        //the yPos is a negative value because we're scrolling it up
     
    var yPos = -($window.scrollTop() / $bgobj.data('speed'));
    //putting together our final background position
    var coords = '50%'+yPos+ 'px';
    //Move the background
    $bgobj.css({backgroundPosition: coords});
    });
    });
});


   /*
   *   Owl carousel
   **/
$(document).ready(function($) {
             var owl = $('.owl-carousel');
             owl.owlCarousel({
                   items:3,
                   dots:false,
                   nav:true,
                   navText: ['<i class="fa fa-chevron-left fa-1x"></i>', '<i class="fa fa-chevron-right fa-1x"></i>'],
                   loop:true,
                   margin:15,
                  autoplay:false,
                  autoplayTimeout:5000,
                  autoplayHoverPause:false,
                  responsiveClass:true,
                  responsive:{
                    0:
                    {
                      items:1 
                    },
                    400:
                    {
                      items:1 
                    },
                    700:
                    {
                      items:2 
                    },
                    1000:
                    {
                      items:3 
                    }

                  }
               });
          $('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[1000])
});
          $('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})
     });



    /*
   *   Nicescroll 
   **/

    jQuery("body").niceScroll({
    cursorcolor:"#C00033",
    cursorborder:"0px",
    cursorwidth :"8px",
    zindex:"9999"
  });

});