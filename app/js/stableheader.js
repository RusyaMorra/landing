
/*var $header = $(".header-top")
var scroll = 0
var active = "active"
$(window).scroll(function() {
  if ($(window).scrollTop() > scroll) {
    $header.addClass(active)
  } else {
    $header.removeClass(active)
  }
})*/


/*var oldScrollY = 0;
var div = document.querySelector('.header-top');

window.addEventListener('scroll', function(){
  var scrolled = window.pageYOffset || document.documentElement.scrollTop;
  var dY = scrolled - oldScrollY;
  
  if ( dY < 0 ){
    div.classList.add('header-top-fixed');
  } else {
    div.classList.remove('header-top-fixed');
  }
  
  oldScrollY = scrolled;
});*/





/*let lastScroll = 0;
const defaultOffset = 200;
const header = document.querySelector('.headermain');

const scrollPosition=()=>window.pageYOffset || document.documentElement.scrollTop;
const containHide=()=>header.classList.contains('hide');

window.addEventListener('scroll',()=>{
  
    if(scrollPosition() > lastScroll && !containHide() && scrollPosition() > defaultOffset){
       header.classList.add('hide');
        console.log('down');
    }
    else if(scrollPosition() < lastScroll && containHide()){
        console.log('up');
        header.classList.remove('hide');
    }

lastScroll = scrollPosition();

})*/