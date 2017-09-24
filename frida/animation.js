$(document).ready(function() {
  var man = document.getElementById("man");
  TweenLite.to(man, 2, {opacity:"1"});
  TweenLite.to(document.getElementById("woman"), 2, {opacity:"1", delay:1});
  TweenLite.to(document.getElementById("knife"), 2, {opacity:"1", delay:2});
  TweenLite.to(document.getElementById("blood"), 2, {opacity:"1", delay:3});
  TweenLite.to(document.getElementById("banner"), 2, {opacity:"1", delay:4});

  var imgheight = document.getElementById('img_area').clientHeight;
  var text = document.getElementById("text_area").setAttribute("style","height:" + imgheight + "px");
});
 

