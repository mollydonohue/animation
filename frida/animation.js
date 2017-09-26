$(document).ready(function() {
  var imgheight = document.getElementById('img_area').clientHeight;
  var text = document.getElementById("text_area").setAttribute("style","height:" + imgheight + "px");
  var animate = ["woman", "man", "banner", "birds"];
  
  var controller = new ScrollMagic.Controller();
  var pinIntroScene = new ScrollMagic.Scene({
    triggerElement: '#text_area',
    triggerHook: 0,
  })
  .setPin('#intro', {pushFollowers: false})
  .addTo(controller);

  for (item in animate) {
    var bannerScene = new ScrollMagic.Scene({
      triggerElement: `#${animate[item]}_text`
    })
    .setClassToggle(`#${animate[item]}`, 'fade-in') // add class to project01
    .addIndicators({
      name: `${animate[item]} fade scene`,
      colorTrigger: 'black',
      indent: 200,
      colorStart: '#75C695'
    })
    .addTo(controller);
  }
});
 

