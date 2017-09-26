$(document).ready(function() {
  var man = document.getElementById("man");
  TweenLite.to(man, 2, {opacity:"1"});
  TweenLite.to(document.getElementById("woman"), 2, {opacity:"1", delay:1});
  TweenLite.to(document.getElementById("knife"), 2, {opacity:"1", delay:2});
  TweenLite.to(document.getElementById("blood"), 2, {opacity:"1", delay:3});

  var imgheight = document.getElementById('img_area').clientHeight;
  var text = document.getElementById("text_area").setAttribute("style","height:" + imgheight + "px");

  var controller = new ScrollMagic.Controller();
  // pin the intro
  var pinIntroScene = new ScrollMagic.Scene({
    triggerElement: '#text_area',
    triggerHook: 0,
  })
  .setPin('#intro', {pushFollowers: false})
  .addTo(controller);

  var bannerScene = new ScrollMagic.Scene({
    triggerElement: '#banner_text'
  })
  .setClassToggle('#banner', 'fade-in') // add class to project01
  .addIndicators({
    name: 'fade scene',
    colorTrigger: 'black',
    indent: 200,
    colorStart: '#75C695'
  })
  .addTo(controller);


});
 

