$(document).ready(function() {
  $(".1").fadeIn(1800);
  $(".2").delay(800).fadeIn(1500);
  $(".3").delay(1600).fadeIn(1500);
  $(".4").delay(2400).fadeIn(1500);
  aboutButtonListener();
  skillsButtonListener();
  projectsButtonListener();
  contactButtonListener();
  scrollListener();
  ianButtonListener();
});

var scrollListener = function(){
  $(window).on("scroll", function(){
    if($(window).scrollTop() > 100){
      $(".header").addClass("white")
      $(".ian").addClass('show')
    } else {
      $(".header").removeClass("white")
      $(".ian").removeClass("show")
    }
  })
}

var aboutButtonListener = function(){
  $(".about-button").on("click", function(){
    $('html, body').animate({
      scrollTop: $(".about-section").offset().top
    }, 1000);
  })
}

var skillsButtonListener = function(){
  $(".skills-button").on("click", function(){
    $('html, body').animate({
      scrollTop: $(".skills-section").offset().top
    }, 1000);
  })
}

var projectsButtonListener = function(){
  $(".projects-button").on("click", function(){
    $('html, body').animate({
      scrollTop: $(".projects-section").offset().top
    }, 1000);
  })
}

var contactButtonListener = function(){
  $(".contact-button").on("click", function(){
    $('html, body').animate({
      scrollTop: $(".contact").offset().top
    }, 1000);
  })
}

var ianButtonListener = function(){
  $(".ian").on("click", function(){
    $('html, body').animate({
      scrollTop: $(".hero-page").offset().top
    }, 1000);
  })
}