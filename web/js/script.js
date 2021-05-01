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