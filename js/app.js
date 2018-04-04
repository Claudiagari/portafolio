$(document).ready(function() {
  $('.button-collapse').sideNav({
    menuWidth: 300, // Default is 300
    edge: 'left', // Choose the horizontal origin
    closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
    draggable: true, // Choose whether you can drag to open on touch screens,
    onOpen: function(el) { /* Do Stuff */ }, // A function to be called when sideNav is opened
    onClose: function(el) { /* Do Stuff */ }, // A function to be called when sideNav is closed
  }
  );
  $('#nav').onePageNav();
});
var options = [ {selector: '#profile-img', 
  offset: 500,
  callback: function(el) {
    Materialize.fadeInImage($(el)); 
  } } ]; 
Materialize.scrollFire(options);
$('.block').smoove({offset: '40%'});
$(function() {
  $('.scroll-down').click(function() {
    $('html, body').animate({scrollTop: $('.ok').offset().top }, 'slow');
    return false;
  });
 
});
var mediaquery = window.matchMedia('(max-width: 768px)');
var moveY=  $('.data-remove').data('move-y')
if (mediaquery.matches) {

  $('.data-remove').removeAttr('data-rotate-x');

  $('.data-remove').removeAttr('data-rotate-z');
  $('.data-remove').removeAttr('data-rotate-y');
  $('.data-remove').removeAttr('data-move-y');
  $('.data-remove').removeAttr('data-move-z');
  $('.data-remove').removeAttr('data-move-x');
} else {
  // mediaquery no es 600
}