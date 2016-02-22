$(document).ready(function(){
  function scrollToAnchor(aid){
    var aTag = $("a[name='"+ aid +"']");
    $('html,body').animate({scrollTop: aTag.offset().top},'slow');
}

$('#home-link').on('click',function(){
  event.preventDefault();
  $('body').animate({scrollTop:0},'slow');
});
$('#about-link, #intro,.arrow-down').on('click',function(){
  event.preventDefault();
  scrollToAnchor('about');
});
$('#contact-link').on('click',function(){
  event.preventDefault();
  scrollToAnchor('contact');
});
});
