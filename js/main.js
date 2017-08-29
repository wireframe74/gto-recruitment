$(document).ready(function(){


$('.sidebar-menu li a:contains("Make an enquiry")').attr('href', '#employer-rego-form');
$('.sidebar-menu li a:contains("Resources")').attr('href', '/resources/great-articles-videos/');



// DISABLE ZOOM

var keyCodes = [61, 107, 173, 109, 187, 189];

$(document).keydown(function(event) {   
   if (event.ctrlKey==true && (keyCodes.indexOf(event.which) != -1)) {
    // alert('disabling zooming'); 
    event.preventDefault();
    }
});

$(window).bind('mousewheel DOMMouseScroll', function (event) {
   if (event.ctrlKey == true) {
     // alert('disabling zooming'); 
     event.preventDefault();
   }
});

});


function textAnimateHdr () {

  setTimeout(function() {
     $('.first').css('visibility','visible').hide().fadeIn().addClass('animated fadeInUp');

    setTimeout(function () {
    $('.second').css('visibility','visible').hide().fadeIn().addClass('animated fadeInUp');}, 500
    );

    setTimeout(function () {
    $('.third').css('visibility','visible').hide().fadeIn().addClass('animated fadeInUp');}, 700
    );
  }, 300)

   
}


jQuery(window).load(function() {
jQuery('#twitter-feed ul li').matchHeight();
jQuery('li.post.type-photo.avatar-size-square').matchHeight();
jQuery('.actionlinks').prepend('<a class="social-logo" href="https://www.facebook.com/AustralianIndustryGroup/" target="_blank"><i class="fa fa-facebook"></i></a>');
jQuery('#twitter-feed ul .interact').prepend('<a class="social-logo" href="https://twitter.com/The_AiGroup" target="_blank"><i class="fa fa-twitter"></i></a>');
textAnimateHdr();
 });





jQuery(function($) {




$('.js-count').each(function() {
   
   $(this).prop('Counter', 0).animate({
      
      Counter: $(this).data('number')
   }, {
      
      duration: 4000,
      easing: 'swing',
      step: function(now) {
         
         $(this).text(Math.ceil(now).toLocaleString('en'));
      }
   });
  
});





$('p').each(function() {
    var $this = $(this);
    if($this.html().replace(/\s|&nbsp;/g, '').length == 0)
        $this.remove();
});



$("#footer-job-subscription").validate();
$("#modal-subscription").validate();
$("#candidate-registration-form").validate();
$("#employer-registration-form").validate();




function menuShow() {
  // Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('.aig-header').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('.aig-header').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('.aig-header').removeClass('nav-up').addClass('nav-down');
        }
    }
    
    lastScrollTop = st;
}


}

// ADD A BODY CLASS

var loc = window.location.pathname;
var parts = loc.split('/');
var lastSegment = parts.pop() || parts.pop();  // handle potential trailing slash




if(loc==='') {
  $(document.body).addClass('home');
}


else  {
    $(document.body).addClass(lastSegment);
}





  $('#porto-testimonials').owlCarousel({
'items': 1, 'autoHeight': true, 'loop': false, 'nav': false, 'dots': true
  });






  $('#customers-testimonials').owlCarousel({
                loop: false,
                margin: 10,
                 autoplay: false,
                  nav: false,
                     center: true,
                   // stagePadding: 50,
                responsiveClass: true,


                
                responsive: {
                  0: {
                    items: 1,
                        nav: true,
                         navText: ['<i class="icon-angle-left"></i>','<i class="icon-angle-right"></i>'],
                responsiveClass: true
                  },
                  600: {
                    items: 1,
                    nav: true,
                         navText: ['<i class="icon-angle-left"></i>','<i class="icon-angle-right"></i>'],
                responsiveClass: true

                  },
                  1000: {
                    items: 1,
                    nav: true,
                    loop: true,
                    nav: true,
                    navText: ['<i class="icon-angle-left"></i>','<i class="icon-angle-right"></i>'],
                responsiveClass: true

                  }
                }
              });




$("#vertical-scroller").owlCarousel({
loop: true,
autoplay: true,
items: 1,
nav: false,
autoplayHoverPause: true,
animateOut: 'slideOutUp',
animateIn: 'slideInUp'
});





$('#customers-testimonials').owlCarousel({
loop: false,
margin: 10,
autoplay: false,
nav: false,
center: true,
// stagePadding: 50,
responsiveClass: true,



responsive: {
0: {
items: 1,
nav: true,
navText: ['<i class="icon-angle-left"></i>','<i class="icon-angle-right"></i>'],
responsiveClass: true
},


780: {
items: 1,
nav: true,
navText: ['<i class="icon-angle-left"></i>','<i class="icon-angle-right"></i>'],
responsiveClass: true

},
1000: {
items: 1,
nav: true,
loop: true,
nav: true,
navText: ['<i class="icon-angle-left"></i>','<i class="icon-angle-right"></i>'],
responsiveClass: true

}
}
});


/*******************************
* ACCORDION WITH TOGGLE ICONS
*******************************/
  function toggleIcon(e) {
        $(e.target)
            .prev('.panel-heading')
            .find(".more-less")
            .toggleClass('glyphicon-plus glyphicon-minus');
    }
    $('.panel-group').on('hidden.bs.collapse', toggleIcon);
    $('.panel-group').on('shown.bs.collapse', toggleIcon);




$('input[type=file]').customFile(); 






 var ocClients = $("#oc-clients");

      ocClients.owlCarousel({
          margin: 30,
          loop: true,
          nav: false,
          autoplay: true,
          dots: false,
          autoplayHoverPause: true,
          responsive:{
          0:{ items:2 },
          480:{ items:3 },
          768:{ items:4 },
          992:{ items:5 },
          1200:{ items:6 }
          }
      });


 $('#our-team').owlCarousel({
                loop: true,
                margin: 10,
                  nav: false,
                   // stagePadding: 50,
                responsiveClass: true,
                'dots': true,


                
                responsive: {
                  0: {
                    items: 2,
                        nav: false,
                         navText: ['<i class="icon-angle-left"></i>','<i class="icon-angle-right"></i>'],
                responsiveClass: true
                  },
                  600: {
                    items: 2,
                   nav: true,
                         navText: ['<i class="icon-angle-left"></i>','<i class="icon-angle-right"></i>'],
                responsiveClass: true

                  },
                  1000: {
                    items: 2,
                    nav: false,
                    loop: false,
                    autoHeight: true,
                            stagePadding: 50,
                    dots:true,
                    margin: 0,
                   nav: true,
                    navText: ['<i class="icon-angle-left"></i>','<i class="icon-angle-right"></i>'],
                responsiveClass: true

                  }
                }
              });




      




    $('#current-jobs').owlCarousel({
                loop: true,
                margin: 10,
                  nav: true,
                   stagePadding: 50,
                responsiveClass: true,
                // 'dots': true,


                
                responsive: {
                  0: {
                    items: 1,
                        nav: false,
                         navText: ['<i class="icon-angle-left"></i>','<i class="icon-angle-right"></i>'],
                responsiveClass: true
                  },
                  600: {
                    items: 2,
                  nav: true,
                         navText: ['<i class="icon-angle-left"></i>','<i class="icon-angle-right"></i>'],
                responsiveClass: true

                  },
                  1000: {
                    items: 4,
                    nav: true,
                    loop: false,
                    margin: 5,
                   nav: true,
                    navText: ['<i class="icon-angle-left"></i>','<i class="icon-angle-right"></i>'],
                responsiveClass: true

                  }
                }
              });







$('.file-upload-input').eq(0).attr('placeholder', 'Upload Your Resume');
$('.file-upload-input').eq(1).attr('placeholder', 'Upload Your Cover Letter');

$('#candidate-registration-form .file-upload-input').eq(0).attr('placeholder', 'Upload Your Resume');
$('#candidate-registration-form .file-upload-input').eq(1).attr('placeholder', 'Upload Your Cover Letter');

$('#employer-registration-form .file-upload-input').eq(0).attr('placeholder', 'Upload File');






$('.large-sidebar .icon-widget__light-grey').matchHeight();

$('.quicklinks .common-hgt').matchHeight();





function stopNumRoll() {

 $('span.numscroller').each(function() {
   // get the native attributes object
   var attrs = this.attributes;
   var toRemove = [];
   // cache the jquery object containing the element for better performance
   var element = $(this);

   // iterate the attributes
   for (attr in attrs) {
     if (typeof attrs[attr] === 'object' && 
         typeof attrs[attr].name === 'string' && 
         (/^data-/).test(attrs[attr].name)) {
       // Unfortunately, we can not call removeAttr directly in here, since it
       // hurts the iteration.
       toRemove.push(attrs[attr].name);
     }
   }

   for (var i = 0; i < toRemove.length; i++) {
     element.removeAttr(toRemove[i]);
   }
});


}


if (window.matchMedia("(min-width: 780px)").matches) {
  /* the viewport is at least 400 pixels wide */
    $('#customers-testimonials .col').matchHeight(); 

    $(window).resize(function(){
$('#customers-testimonials .col').matchHeight(); 
    });

    
} else {
  /* the viewport is less than 400 pixels wide */
}


$('.tapestry-qlinks .icon-widget__sm').matchHeight();
$('.tab-item--child').matchHeight();
$('.calculator-itm').matchHeight();


if (isMobile()) {
stopNumRoll();
}


function isMobile() {
return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

if (!isMobile()) {

menuShow();
//place script you don't want to run on mobile here
// $(window).scroll(function(e) {
 parallax();
// });


}





$('.tp-caption.NotGeneric-Title')

// TinyNav.js 1
$('#sidebar .sidebar-menu').tinyNav({
active: 'selected',
// indent: '→',
// label: 'Menu'
}); 


$("#tinynav1").wrap('<div class="select" />');

$("#tinynav1").prepend("<option value='' selected='selected'>In this Section</option>");


// // TinyNav.js 2
// $('#nav2').tinyNav({
// header: 'Navigation' // Writing any title with this option triggers the header
// });




// $('.gfield > input[type="text"], .gfield > input[type="email"], .gfield > input[type="password"]').addClass('form-control');









$('a[href="#subscribe-form"]').on('click', function(event) {
event.preventDefault();
$('#subscribe-form').removeClass('slide-out');
$('#subscribe-form').addClass('open').fadeIn();
$('#subscribe-form > .container').addClass("wow fadeInUp animated");
$('#subscribe-form > .container').attr("style","visibility: visible; animation-name: fadeInUp;");

$('body').css('overflow-y', 'hidden');
});



$('#subscribe-form, #subscribe-form button.close').on('click keyup', function(event) {
if (event.target == this || event.target.className == 'close-button' || event.keyCode == 27) {
$('#subscribe-form').addClass('slide-out');

$('#subscribe-form > .container').removeClass("wow fadeInUp animated").attr("style","visibility: hidden; animation-name:;");
$(this).removeClass('open');
$(this).fadeOut();
$('body').css('overflow-y', 'auto');
}
});



$('a[href="#employer-rego-form"]').on('click', function(event) {
event.preventDefault();
$('#employer-rego-form').removeClass('slide-out');
$('#employer-rego-form').addClass('open').fadeIn();
$('#employer-rego-form > .container').addClass("wow fadeInUp animated");
$('#employer-rego-form > .container').attr("style","visibility: visible; animation-name: fadeInUp;");

$('body').css('overflow-y', 'hidden');
});



$('#employer-rego-form, #employer-rego-form button.close').on('click keyup', function(event) {
if (event.target == this || event.target.className == 'close-button' || event.keyCode == 27) {
$('#employer-rego-form').addClass('slide-out');

$('#employer-rego-form > .container').removeClass("wow fadeInUp animated").attr("style","visibility: hidden; animation-name:;");
$(this).removeClass('open');
$(this).fadeOut();
$('body').css('overflow-y', 'auto');
}
});







$('a[href="#candidate-rego-form"]').on('click', function(event) {
event.preventDefault();
$('#candidate-rego-form').removeClass('slide-out');
$('#candidate-rego-form').addClass('open').fadeIn();
$('#candidate-rego-form > .container').addClass("wow fadeInUp animated");
$('#candidate-rego-form > .container').attr("style","visibility: visible; animation-name: fadeInUp;");

$('body').css('overflow-y', 'hidden');
});


$('#candidate-rego-form, #candidate-rego-form button.close').on('click keyup', function(event) {
if (event.target == this || event.target.className == 'close-button' || event.keyCode == 27) {
$('#candidate-rego-form').addClass('slide-out');

$('#candidate-rego-form > .container').removeClass("wow fadeInUp animated").attr("style","visibility: hidden; animation-name:;");
$(this).removeClass('open');
$(this).fadeOut();
$('body').css('overflow-y', 'auto');
}
});








$('a[href="#search"]').on('click', function(event) {
event.preventDefault();
$('#search').removeClass('slide-out');
$('#search').addClass('open').fadeIn();
$('#search > form > input[type="search"], #searchsubmit').addClass("wow fadeInUp animated");
$('#search > form > input[type="search"],#searchsubmit').attr("style","visibility: visible; animation-name: fadeInUp;");
$('#search > form > input[type="search"]').focus();
});

$('#search, #search button.close').on('click keyup', function(event) {
if (event.target == this || event.target.className == 'close-button' || event.keyCode == 27) {
$('#search').addClass('slide-out');

$('#search > form > input[type="search"],#searchsubmit').removeClass("wow fadeInUp animated").attr("style","visibility: hidden; animation-name:;");
$(this).removeClass('open');
$(this).fadeOut();
}
});

// $('form').submit(function(event) {
// event.preventDefault();
// return false;
// });





new WOW().init();

// jQuery(window).stellar({
// horizontalScrolling:false,
// hideDistantElements: false
// });



// jQuery.stellar({
//     horizontalScrolling: false,
//     responsive: true
// });


jQuery(window).stellar({
// horizontalScrolling:false,
// hideDistantElements: false
});

var simplebar = new Nanobar();
simplebar.go(100);




$('.sticky-footer--close-btn').click(function(e) {
  e.preventDefault();
  $("#sticky-footer").fadeOut();
});




function parallaxSimple() {

var wScroll = $(window).scrollTop();
var $body = $(document.body);
var bodyHeight = $body.height();

  $('.parallax--bg').css('background-position', 'center ' + (wScroll*0.55)+'px');
  $('.parallax--bg-btm').css('background-position', 'center ' + (wScroll*0.15)+'px');

   $('.parallax--right-img').css({'transform': 'rotate(' + (wScroll / bodyHeight * 210) + 'deg)'});

      $('.parallax--left-img').css({'transform': 'rotate(' + (-1 * wScroll / bodyHeight * 210) + 'deg)'});
  

    $('.parallax--box-fast').css('bottom', -6 + (wScroll*.33)+'em')


  $('.parallax--box').css('bottom', -8 + (wScroll*.013)+'em')

}



function parallax() {
  var scroll = $(window).scrollTop();
  var screenHeight = $(window).height();

  $('.parallax').each(function() {
    var offset = $(this).offset().top;
    var distanceFromBottom = offset - scroll - screenHeight
    
    if (offset > screenHeight && offset) {
      $(this).css('background-position', 'center ' + (( distanceFromBottom  ) * 0.5) +'px');
    } else {
      $(this).css('background-position', 'center ' + (( -scroll ) * 0.5) + 'px');
    }
  })
}



function parallaxItem() {
  var scroll = $(window).scrollTop();
  var screenHeight = $(window).height();

  $('.parallax--box').each(function() {
    var offset = $(this).offset().top;
    var distanceFromBottom = offset - scroll - screenHeight
    
    if (offset > screenHeight && offset) {
      $(this).css('top', 'center ' + (( distanceFromBottom  ) * 0.5) +'px');
    } else {
      $(this).css('top', 'center ' + (( -scroll ) * 0.5) + 'px');
    }
  })
}




var myText = $('.item > .truncate');
myText.text(myText.text().substring(0,300));



$('.truncate').succinct({
size: 200,
omission: '...'
});










// $.fn.is_on_screen = function(){

// var win = $(window);

// var viewport = {
//     top : win.scrollTop(),
//     left : win.scrollLeft()
// };
// viewport.right = viewport.left + win.width();
// viewport.bottom = viewport.top + win.height();

// var bounds = this.offset();
// bounds.right = bounds.left + this.outerWidth();
// bounds.bottom = bounds.top + this.outerHeight();

// return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));

// };


// $(window).scroll(function(){
//   if( jQuery('#stats').is_on_screen() ) {
//      animateNumbers();
//      $(window).off('scroll');
//   }
// });




// var elementPosition = $('#menu-employers').offset();

// $(window).scroll(function(){
//         if($(window).scrollTop() > elementPosition.top){
//               $('#menu-employers').css('position','fixed').css('top', 100 );
//         } else {
//             $('#menu-employers').css('position','static');
//         }    
// });





// MOBILE MENU

$('.sm.sm-blue').smartmenus({
      subMenusSubOffsetX: 1,
      subMenusSubOffsetY: -8
    });



$( "#jobs-listing .applybutton a").text("View this Job");
$( "#rightcolumn .applybutton a").text("Apply Today");


$('#findaspecialist input, #findaspecialist select').addClass('form-control');

$('.st-accordion').accordion();

        //Responsive Menu  
    $(".menu-button").click(function () {
    $(".responsive-menu").toggleClass("show-menu");
    $(".hide-content-on-responsive-menu").toggleClass("hide-body");
    $("body").toggleClass("no-scroll");
    });

  
    $(".form-button").click(function () {
     $(".offcanvas-form").addClass("show-menu");
    $("body").addClass("no-scroll");
    });


      $('.close-btn').click(function () {
    $(this).parent().removeClass("show-menu");
    $("body").removeClass("no-scroll");
    });






    $(".responsive-menu .menu-item-has-children .sub-menu").hide();
    $(".responsive-menu .menu-item-has-children").append("<span class='has-details'></span>");
    $(".responsive-menu .has-details").click(function () {
        $(this).parent(".menu-item-has-children").find("> .sub-menu").slideToggle();
        $(this).toggleClass("show");
    });

    $("#c-mask").click(function () {
        $(".responsive-menu").removeClass("show-menu");
        $("body").removeClass("no-scroll");
    });
//End of Responsive Menu    



 
  

    $(".hide-content-on-responsive-menu").click(function () {
        $(".responsive-menu").removeClass("show-menu");
         $(".offcanvas-form").toggleClass("show-menu");
        $(this).removeClass("hide-body");
        $("body").removeClass("no-scroll");
    });
//End of Responsive Menu    








  // ANIMATED SEARCH



function scrollHeader () {

var siteheaderScroll = $('.aig-header.change');
megamenuScroll = siteheaderScroll.find('nav li .megamenu');
var menuItem = siteheaderScroll.find('li.menu-item-has-children > a');

menuItem.mouseenter(function() {
siteheaderScroll.removeClass('change');
siteheaderScroll.addClass('reversed');
});



megamenuScroll.mouseleave(function() {
siteheaderScroll.removeClass('reversed');
setTimeout(function() {
siteheaderScroll.addClass('change');
}, 450);
});


}


  // SCROLL ADD CLASS HEADER

$(window).scroll(function() {    
 
scroll = $(window).scrollTop();

if (!isMobile()) {
  parallaxSimple();
  } 


    if(scroll >= 200) {
        $(".aig-header").addClass("reversed");
scrollHeader ();



    megamenuScroll.mouseleave(function() {
    siteheaderScroll.removeClass('reversed');
              setTimeout(function() {
             siteheaderScroll.addClass('change');
          }, 450);
    });

        


    } else {
        $(".aig-header").removeClass("reversed");
        
    }

 
});




  var $siteheader = $('.aig-header');
    var $megamenu = $siteheader.find('nav li .megamenu');
    var $pagecontent = $('#pagecontent');

    // initiate timeout variables
    hoverTimeout = "";
    leaveTimeout = "";
    $siteheader.find('nav li.menu-item-has-children').mouseenter(function() {
        var $thisMegamenu = $(this).find('.megamenu');
         var $thisMegamenuUL = $(this).find('ul.sub-menu')
        // stop any leaveTimeouts if they were triggered through guick back-and-forth hovering
        clearTimeout(leaveTimeout);
        // 1.
        hoverTimeout = setTimeout(function() {
          // 2. Another megamenu already open?
          if( $megamenu.is(':visible') ) {
            // if new hovered li has megamenu, hide old menu and show the new, otherwise slide everything back up
            if( $thisMegamenu.length ) {
              // stop any other hoverTimeouts triggered through guick back-and-forth hovering
              clearTimeout(hoverTimeout); 
              $megamenu.filter(':visible').stop(true, true).hide();
              $thisMegamenu.stop(true, true).show();
            } else {
              $megamenu.filter(':visible').stop(true, true).slideUp(190);
              $pagecontent.stop(true, true).animate({ paddingTop: '0'}, 190);
               $thisMegamenuUL.css('visibility','visible').hide().delay(200).fadeIn();
           
            }
          } else {
            if( $thisMegamenu.length ) {
              // stop any other hoverTimeouts triggered through guick back-and-forth hovering
              clearTimeout(hoverTimeout); 
              $thisMegamenu.stop(true, true).slideDown(190);

              /* 16.5em is the set height of the megamenu + negative margin of nav ul */

if(scroll <= 600) {
              $pagecontent.stop(true, true).animate({ paddingTop: '190px'}, 190);

            }
               $thisMegamenuUL.css('visibility','visible').hide().delay(200).fadeIn();

              
            }
          }
        }, 200);
    });
    // Leaving li item (if another li is hovered over quickly after, this is cleared)
    $siteheader.find('nav li.menu-item-has-children').mouseleave(function() {
      clearTimeout(hoverTimeout);
      leaveTimeout = setTimeout(function() {
        if( $megamenu.is(':visible') ) {
          $megamenu.filter(':visible').stop(true, true).slideUp(500);
          $pagecontent.stop(true, true).animate({ paddingTop: '0'}, 500);
   
        }
      }, 200);
    });



// END MEGA MENU








            });
    

