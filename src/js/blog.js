/**
 * Common JS File (global functionality).
 * 
 * Please conform to ECMA rules:
 * @link https://devhints.io/es6
 * 
 * Please conform to JSDoc:
 * @link https://jsdoc.app/tags-param.html#examples
 */


// Little hello world to test compilers/transpilers 
console.log('Running blog module.')

document.addEventListener('mouseover', (event) => {

	if (event.target.classList.contains('js-content-loader')) {
        let contentElement = event.target.parentNode.nextElementSibling
        contentElement.classList.add('hover')
	}
}, false);


document.addEventListener('mouseout', (event) => {

	if (event.target.classList.contains('js-content-loader')) {
        let contentElement = event.target.parentNode.nextElementSibling
        contentElement.classList.remove('hover')
	}
}, false);