$(document).ready(function(){

/* *******************************start slider*************************** */
$('.slide_right .owl-carousel').owlCarousel({
  loop:true,
  nav:true,
  rtl:true,
  animateOut: 'fadeOut',
  animateOut: 'fadeIn',
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
            items:3
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



$( ".menu .dropdown" ).hover(function() {
  var index = $(this).index();
  var subMenu = $(this).find("submenu")

  // console.log( $(subMenu).style.top)

  console.log( subMenu.style.top)

  var top =  index*(-51);
  // $(subMenu).css({top:top});
  // $(subMenu).offset().top = top+"px";

  $(subMenu).style.top = "200px";

});


/////////////////////**** start menu******//////////////



$("menu_icon").click(function(){
})



});

function openNav() {
  document.getElementById("mySidenav").style.width = "260px";
  document.getElementById("main").style.marginRight = "260px";
  $('.moboverlay').fadeIn('fast');
  $("body").addClass("ovr_");

}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginRight= "0";
  $('.moboverlay').fadeOut('fast');
  $("body").removeClass("ovr_");

}
$(".moboverlay").click(function(){
  $(".closebtn").trigger("click");
  // $('.moboverlay').fadeOut('fast');
});



/////////////////////**** end menu******//////////////