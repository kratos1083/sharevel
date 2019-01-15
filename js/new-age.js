(function($) {
  "use strict"; // Start of use strict
  var darkLogo = "img/darkLogo.png";
  var lightLogo = "img/lightLogo.png"

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 48)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 54
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    console.log($("#mainNav").offset().top);
    if (($("#mainNav").offset().top > 100)) {
       $("#brand").attr("src",darkLogo);
      $("#mainNav").addClass("navbar-shrink");
    } else {
       $("#brand").attr("src",lightLogo);
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);
  $(".collapse").on('show.bs.collapse', function(){
    // $("#brand").attr("src",darkLogo);
    $("#mainNav").addClass("navbar-shrink");
    });
  $(".collapse").on('hidden.bs.collapse', function(){
    // $("#brand").attr("src",lightLogo);
    $("#mainNav").removeClass("navbar-shrink");
    });

  // $(window).resize(navbarCollapse)($(window).width() <= 992)

})(jQuery); // End of use strict
