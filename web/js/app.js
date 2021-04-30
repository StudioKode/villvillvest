// GLIDER.JS
new Glider(document.querySelector('.glider'), {
    slidesToShow: 1,
    dots: '#dots',
    draggable: false,
    arrows: {
      prev: '.glider-prev',
      next: '.glider-next'
    }
  });

console.log("File loaded");
