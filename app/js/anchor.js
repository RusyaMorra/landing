$(document).ready(function() {
 $("#js-btn").on("click", function(event) {
   event.preventDefault();
  var top = $("#js-plan").offset().top;
  $("html, body").animate({
         scrollTop: top
  }, 500);
 });
});
$(document).ready(function() {
 $("#js-btn2").on("click", function(event) {
   event.preventDefault();
  var top = $("#js-plan2").offset().top;
  $("html, body").animate({
         scrollTop: top
  }, 500);
 });
});
$(document).ready(function() {
 $("#js-btn3").on("click", function(event) {
   event.preventDefault();
  var top = $("#js-plan3").offset().top;
  $("html, body").animate({
         scrollTop: top
  }, 500);
 });
});
$(document).ready(function() {
 $("#js-btn5").on("click", function(event) {
   event.preventDefault();
  var top = $("#js-plan5").offset().top;
  $("html, body").animate({
         scrollTop: top
  }, 500);
 });
});