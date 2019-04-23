$(function(){

$('#strelka').on('click', function(e){
  $('html,body').stop().animate({ scrollTop: $('#menuu').offset().top }, 1000);
  e.preventDefault();
});

});