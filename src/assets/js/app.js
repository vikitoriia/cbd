import $ from 'jquery';
import 'what-input';

// Foundation JS relies on a global varaible. In ES6, all imports are hoisted
// to the top of the file so if we used`import` to import Foundation,
// it would execute earlier than we have assigned the global variable.
// This is why we have to use CommonJS require() here since it doesn't
// have the hoisting behavior.
window.jQuery = $;
// require('foundation-sites');

// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
import './lib/foundation-explicit-pieces';

import './lib/slick.min.js';

$(document).foundation();

let sliderNew = $('.ba-slider-new');

sliderNew.slick({
	slidesToShow: 3,
  	slidesToScroll: 1,
	dots: false,
	arrows: true,
	nextArrow: '.ba-slide-next',
	prevArrow: '.ba-slide-previous',
	responsive: [
		{
		  breakpoint: 1024,
		  settings: {
			 slidesToShow: 3,
			 slidesToScroll: 3,
			 infinite: true,
			 dots: true
		  }
		},
		{
		  breakpoint: 600,
		  settings: {
			 slidesToShow: 2,
			 slidesToScroll: 2
		  }
		},
		{
		  breakpoint: 480,
		  settings: {
			 slidesToShow: 1,
			 slidesToScroll: 1
		  }
		}
		
	 ]
	
})