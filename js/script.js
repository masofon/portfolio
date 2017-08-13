  $( ".softScroll" ).on( "click", function(e) {

 $('html, body').animate({
    scrollTop: $("#"+ e.target.hash.split('#')[1]).offset().top
 }, 1000);
});