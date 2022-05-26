(function ($) {

    new WOW().init();
    
    $(window).load(function(){
      $("#navigation").sticky({ topSpacing: 0 });
    });

    jQuery(window).load(function() {
        jQuery("#preloader").delay(100).fadeOut("slow");
        jQuery("#load").delay(100).fadeOut("slow");
    });


    //jQuery for page scrolling feature - requires jQuery Easing plugin
    $(function() {
        $('.navbar-nav li a').bind('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top
            }, 500, 'easeOutExpo');
            var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
            if (width < 768) {
                $('.navbar-toggle').click();
            }
            event.preventDefault();
        });
    });

})(jQuery);
