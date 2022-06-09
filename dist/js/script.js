"use strict";

window.addEventListener("DOMContentLoaded",()=>{
  const menuBlock = document.querySelector('.menu');
  const menuClose= document.querySelector('.menu__close');
  const hamburger = document.querySelector('.hamburger');

  hamburger.addEventListener('click',()=>{
      menuBlock.classList.add('active');
      menuClose.addEventListener('click', ()=>{
      menuBlock.classList.remove('active');
    })
  })

  //value on skills
  const valueRating = document.querySelectorAll('.skills__gradient_count');
  const factRatioLine = document.querySelectorAll('.skills__gradient_fact');

  valueRating.forEach((item, i) => {
    factRatioLine[i].style.width = item.innerHTML;
  });

  //array to UP 
  (function() {
    'use strict';
  
    function trackScroll() {
      var scrolled = window.pageYOffset;
      var coords = document.documentElement.clientHeight;
  
      if (scrolled > coords) {
        goTopBtn.classList.add('back_to_top-show');
      }
      if (scrolled < coords) {
        goTopBtn.classList.remove('back_to_top-show');
      }
    }
  
    function backToTop() {
      if (window.pageYOffset > 0) {
        window.scrollBy(0, -80);
        setTimeout(backToTop, 0);
      }
    }
  
    var goTopBtn = document.querySelector('.back_to_top');
  
    window.addEventListener('scroll', trackScroll);
    goTopBtn.addEventListener('click', backToTop);
  })();

})