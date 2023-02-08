$('.common-slider').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  items:1,
  dots: false,
})
$('.upcoming-movies-slider').owlCarousel({
  loop:true,
  margin:10,
  items: 1,
  nav:false,
  dots: true,
  animateOut: 'slideOutUp',
  animateIn: 'slideInUp',
  smartSpeed:450,
  mouseDrag:false

})