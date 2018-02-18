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
$('.block').smoove({offset:'40%'});