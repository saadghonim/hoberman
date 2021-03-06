$(document).ready(function(){

/* *******************************start slider*************************** */
$('.slide_right .owl-carousel').owlCarousel({
  loop:true,
  nav:true,
  rtl:true,
  animateOut: 'fadeOut',
  animateIn: 'fadeIn',
  touchDrag  : false,
  mouseDrag  : false,
  navText:["<i class='fas fa-angle-right'></i>" ,"<i class='fas fa-angle-left'></i>"],
  responsive:{
    0:{
        items:1
    },
    600:{
        items:1
    },
    1000:{
        items:1
    }
}
});
/* *******************************end slider*************************** */

/* *******************************start Sections*************************** */
$('.Sections .owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  rtl:true,
  responsive:{
      0:{
          items:2
      },
      600:{
          items:4
      },
      1000:{
          items:6
      },
      1200:{
          items:7
    },
    1920:{
      items:7
}
  }
})
/* *******************************end Sections*************************** */

/* *******************************start best_seller****************************  */

$('.best_seller .owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    rtl:true,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:4
        },
        1000:{
            items:5
        },
        1200:{
          items:6
      }
    }
})
/* *******************************end best_seller**************************** */

/* ******************************* start cust_reviews************************* */
$('.cust_reviews .owl-carousel').owlCarousel({
loop:true,
margin:10,
nav:true,
rtl:true,
responsive:{
    0:{
        items:1
    },
    600:{
        items:2
    },
    1000:{
        items:3
    }
}
})
/* ******************************* end cust_reviews************************* */

/////////////////////**** start menu******//////////////


});

function openNav() {
    $('#main').addClass("active")
    $('.moboverlay').fadeIn('500');
    $("body").addClass("ovr_");
}

function closeNav() {
    $('#main').removeClass("active")
  $('.moboverlay').fadeOut('500', function () {
    $("body").removeClass("ovr_");
});


}
$(".moboverlay").click(function(){
  closeNav();
});


/////////////////////**** end menu******//////////////