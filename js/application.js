new WOW().init();

$(document).ready(function() {
  $('.1').fadeIn(1800);
  $('.2').delay(800).fadeIn(1500);
  $('.3').delay(1600).fadeIn(1500);
  $('.4').delay(2400).fadeIn(1500);
  $('.header').delay(2700).fadeIn(1500);
  aboutButtonListener();
  skillsButtonListener();
  projectsButtonListener();
  contactButtonListener();
  scrollListener();
  ianButtonListener();
  emailButtonListener();
});


var scrollListener = function() {
  const about = $('.about-section').offset().top;
  const skills = $('.skills-section').offset().top;
  const projects = $('.projects-section').offset().top;
  const contact = $('.contact').offset().top;

  $(window).on('scroll', function() {
    const scroll = $(window).scrollTop();
    if (scroll > 100) {
      $('.header').addClass('white');
      $('.ian').addClass('show');
      $('.links').show().css('display', 'flex');
    } else {
      $('.header').removeClass('white');
      $('.ian').removeClass('show');
      $('.links').hide();
    }
    if(scroll > about - 60 && scroll < skills - 60){
      $('.about-button').addClass('clicked');
    } else {
      $('.about-button').removeClass('clicked');
    }
    if(scroll > skills - 60 && scroll < projects - 60){
      $('.skills-button').addClass('clicked');
    } else {
      $('.skills-button').removeClass('clicked');
    }
    if(scroll > projects - 60 && scroll < contact - 50){
      $('.projects-button').addClass('clicked');
    } else {
      $('.projects-button').removeClass('clicked');
    }
  });

  // if(scrollPoint > about && scrollPoint < skills){
  // } else {
  //   $('.about-button').removeClass('clicked');
  // }
};

var aboutButtonListener = function() {
  $('.about-button').on('click', function() {
    $('html, body').animate({
        scrollTop: $('.about-section').offset().top - 50
      },
      1000
    );
  });
};

var skillsButtonListener = function() {
  $('.skills-button').on('click', function() {
    $('html, body').animate({
        scrollTop: $('.skills-section').offset().top - 50
      },
      1000
    );
  });
};

var projectsButtonListener = function() {
  $('.projects-button').on('click', function() {
    $('html, body').animate({
        scrollTop: $('.projects-section').offset().top - 50
      },
      1000
    );
  });
};

var contactButtonListener = function() {
  $('.contact-button').on('click', function() {
    $('html, body').animate({
        scrollTop: $('.contact').offset().top - 50
      },
      1000
    );
  });
};

var ianButtonListener = function() {
  $('.ian').on('click', function() {
    $('html, body').animate({ scrollTop: $('.hero-page').offset().top}, 1000);
  });
};

var emailButtonListener = function() {
  $('.email-button').on('click', function() {
    window.location.href = "mailto:ian.driscoll.o@gmail.com";
  })
}
