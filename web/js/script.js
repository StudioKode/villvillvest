//Get Gliders
// var gliderHero = document.querySelector('#gliderHero');
// var gliderVenues = document.querySelector('#gliderVenues');

window.addEventListener('load', function() {
    new Glider(document.querySelector('#gliderHero'), {
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: false,
        dots: '#heroDots',
        arrows: {
          prev: '#heroPrev',
          next: '#heroNext'
        }
      });
})

window.addEventListener('load', function() {
    new Glider(document.querySelector('#gliderVenues'), {
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: false,
        dots: '#venuesDots',
        arrows: {
          prev: '#venuesPrev',
          next: '#venuesNext'
        }
      });
})

window.addEventListener('load', function() {
    new Glider(document.querySelector('#gliderArtister'), {
        slidesToShow: 3,
        slidesToScroll: 3,
        draggable: false,
        dots: '#artisterDots',
        arrows: {
          prev: '#artisterPrev',
          next: '#artisterNext'
        }
      });
})


//GSAP Animations

//Get elements

const burgers = document.querySelectorAll('.header__hamburger-meny');
const nav = document.querySelector('.navigation');

var tl = gsap.timeline({defaults:{duration: 1, ease: Back.easeOut.config(2)}})

tl.paused(true);
tl.to(".navigation", {opacity: '1'})


burgers.forEach(burger => burger.addEventListener('click', () => {
  if (nav.style.opacity === '1') {
    tl.reverse(.4);
    nav.style.zIndex = '1';
    nav.style.display = 'none';
    console.log("uplay");
  } else {
    tl.play();
    nav.style.zIndex = '100';
    nav.style.display = 'block';
    console.log("play");
  }


  // tl.play();
  
}))

console.log("loaded");
console.log(nav.style.opacity);