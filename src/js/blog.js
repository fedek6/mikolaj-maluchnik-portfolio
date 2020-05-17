/**
 * Blog page functionality.
 * 
 * Please conform to ECMA rules:
 * @link https://devhints.io/es6
 * 
 * Please conform to JSDoc:
 * @link https://jsdoc.app/tags-param.html#examples
 */
import LazyLoad from "vanilla-lazyload"
import { isElementVisible } from './components/utils';

// Little hello world to test compilers/transpilers 
console.log('Running blog module.')

// Hover effect.
document.addEventListener('mouseover', (event) => {

	if (event.target.classList.contains('js-content-loader')) {

		let collection = event.target.parentNode.parentNode.getElementsByClassName('blog-post-teaser__content')

		for (let element of collection) {
			element.classList.add('hover')
			element.parentNode.classList.add('hover');
		}

	}
}, false);

// Mouse out.
document.addEventListener('mouseout', (event) => {

	if (event.target.classList.contains('js-content-loader')) {

		let collection = event.target.parentNode.parentNode.getElementsByClassName('blog-post-teaser__content')

		for (let element of collection) {
			element.classList.remove('hover');
			element.parentNode.classList.remove('hover');
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
		

		//element.parentNode.parentNode.classList.add('loaded')
		
		element.closest('article').classList.add('loaded')
		element.closest('.blog-post-teaser__content').classList.add('loaded')
		
		// element.parentNode.classList.add('loaded')

		console.log('INFO: Image loaded')
	}
})

/**
 * Watch visibility
 */
let articles = document.getElementsByClassName('blog-post-teaser')

function markVisible(elements) {

	for (let element of elements) {
		if (isElementVisible(element)) {
			// element.style.border = "solid 2px Yellow"
			element.classList.add('visible')
			element.getElementsByTagName('img')[0].classList.add('visible')
			element.getElementsByClassName('blog-post-teaser__content')[0].classList.add('visible')
		}
	}
}

/**
 * Window onload.
 */
window.addEventListener('load', (event) => {
	

	setInterval(() => {
		markVisible(articles)
	}, 600)

	/* window.addEventListener('scroll', function (event) {
		markVisible(articles)
	}, false) */
})