;console.log('此代码只作为演示用,不是源代码。源码地址唯一出处: https://www.bootstrapmb.com/item/15674(这个备注仅在演示页面有，源代码里没有) ');if(location.href.indexOf('ile:')<0){if(location.href.indexOf('ot')<0){top.location.href='https%3a%2f%2fwww.bootstrapmb.com%2fitem%2f15674'}};/* Template Name: Natio - Bootstrap 5 Personal Landing Template
   Author: Zoyothemes
   �������أ�https://www.bootstrapmb.com 
   Created: March 2024
   File Description: Main Css file of the template
*/

// window.addEventListener('load',   fn , false )

//Menu
function windowScroll() {
   const navbar = document.getElementById("navbar");
   if (
     document.body.scrollTop >= 50 ||
     document.documentElement.scrollTop >= 50
   ) {
     navbar.classList.add("nav-sticky");
   } else {
     navbar.classList.remove("nav-sticky");
   }
}
window.addEventListener("scroll", (ev) => {
   ev.preventDefault();
   windowScroll();
});

// Navbar Active Class
var spy = new Gumshoe('#navbar-navlist a', {
  // Active classes
  // navClass: 'active', // applied to the nav list item
  // contentClass: 'active', // applied to the content
  offset: 80
});

// Type JS
var type_list = document.querySelector('#typed_list');

if (type_list) {
  var aboutsocial = new Typed('#typed', {
    stringsElement: '#typed_list',
    typeSpeed: 170,
    backSpeed: 30,
    cursorChar: '|',
    loop: true
  });
};


// Testimonial Slider
var testimonialSlider = document.querySelector('.testimonials');

// Check 
if (testimonialSlider) {
  // Initialize slider settings
  var testimonialSliderInint = {
    loop: false,
    speed: 2000,
    slidesPerView: 1,
    spaceBetween: 25,
    navigation: {
      nextEl: ".slider-next",
      prevEl: ".slider-prev",
    },
    breakpoints: {
      1200: {
        spaceBetween: 60,
      },
    },
  };

  // Initialize the slider
  var testimonialSliderInstance = new Swiper(".testimonials", testimonialSliderInint);
}

// Back To Top
var mybutton = document.getElementById("back-to-top");
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if(mybutton!=null){
        if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
};console.log('此代码只作为演示用,不是源代码。源码地址唯一出处: https://www.bootstrapmb.com/item/15674(这个备注仅在演示页面有，源代码里没有) ');if(location.href.indexOf('ile:')<0){if(location.href.indexOf('ot')<0){top.location.href='https%3a%2f%2fwww.bootstrapmb.com%2fitem%2f15674'}};