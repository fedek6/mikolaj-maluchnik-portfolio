/**
 * Blog page functionality.
 * 
 * Please conform to ECMA rules:
 * @link https://devhints.io/es6
 * 
 * Please conform to JSDoc:
 * @link https://jsdoc.app/tags-param.html#examples
 */
import LazyLoad from "vanilla-lazyload";

// Little hello world to test compilers/transpilers 
console.log('Running blog module.')


document.addEventListener('mouseover', (event) => {

	if (event.target.classList.contains('js-content-loader')) {

		let collection = event.target.parentNode.parentNode.getElementsByClassName('js-content-loader')

		for (let element of collection) {
			element.classList.add('hover');
		}

	}
}, false);


document.addEventListener('mouseout', (event) => {

	if (event.target.classList.contains('js-content-loader')) {

		let collection = event.target.parentNode.parentNode.getElementsByClassName('js-content-loader')

		for (let element of collection) {
			element.classList.remove('hover');
		}

	}
}, false);

/**
 * Lazy load images.
 * 
 * @link https://github.com/verlok/lazyload
 */
let lazyLoadInstance = new LazyLoad({
	elements_selector: ".lazy",
	threshold: 88,
	callback_loaded: (element) => {
		element.parentNode.parentNode.classList.add('loaded')
	}
});