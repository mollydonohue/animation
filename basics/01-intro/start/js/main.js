$(document).ready(function(){

	// Init ScrolMagic
	var controller = new ScrollMagic.Controller();

	var pinIntroScene = new ScrollMagic.Scene({
		triggerElement: '#intro',
		triggerHook: 0,
		duration: '30%'
	})
	.setPin('#intro', {pushFollowers: false})
	.addTo(controller);

	var pinIntroSceneAgain = new ScrollMagic.Scene({
		triggerElement: '#project01',
		triggerHook: 0.4,
		
	})
	.setPin('#intro', {pushFollowers: false})
	.addTo(controller);

	var parallaxTl = new TimelineMax();
	parallaxTl
		//0.3 is where it starts, the offset
		.from('.content-wrapper', 0.4, {autoAlpha: 0, ease:Power0.easeNone}, 0.4)
		//start at 0 means they happen at the same time
		// the 2 is the speed
		.from('.bcg', 2, {y: '-50%', ease:Power0.easeNone}, 0)
		;


	//parallax scene
	var slideParallaxScene = new ScrollMagic.Scene({
		triggerElement: '.bcg-parallax',
		triggerHook: 1,
		duration: '100%'

	})
	// this is the animation of the parallax effect 
	// animate background image from -30% 
	.setTween(parallaxTl)
	.addTo(controller);

	$('.project').each(function(){

		var project = this;

	 	var ourScene = new ScrollMagic.Scene({
	 		triggerElement: project.children[0],
	 		/*duration: '90%', //view is the height of entire view port*/
	 		triggerHook: 0.9,
	 		reverse: false
	 	})

	 	.setClassToggle(this, 'fade-in') // add class to project01
	 	.addIndicators({
	 		name: 'fade scene',
	 		colorTrigger: 'black',
	 		colorStart: '#75C695',
	 		colorEnd: 'pink',
	 	})
	 	.addTo(controller);
	});
 

});


















