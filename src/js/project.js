/**
 * Project page functionality.
 * 
 * Please conform to ECMA rules:
 * @link https://devhints.io/es6
 * 
 * Please conform to JSDoc:
 * @link https://jsdoc.app/tags-param.html#examples
 */
import Flickity from 'flickity'
import MediaWatcher from './components/mediawatcher'
import LazyLoad from "vanilla-lazyload"

// Little hello world to test compilers/transpilers 
console.log('Running project module.')

/** @var {object} flkty */
let flkty;

let lazyLoadInstance;

/**
 * Run Flickity only on bigger screens.
 */
MediaWatcher.addDynamicListener(item => { 
    // If not mobile.
    if( ['xs', 'sm'].includes(item) === false ) {
        // Start Flickity.
        if(typeof flkty === 'undefined') {
            console.log('INFO: Running Flickity')
            flkty = new Flickity( '.project-carousel', {
                "lazyLoad": true
            }); 

            flkty.on( 'change', (index) => {
                console.log('INFO: Current slide ' + index)
            })
            
        } else {
            flkty.resize()
        }
    } else {
        // Destroy Flickity on mobile.
        if(typeof flkty !== 'undefined') { 
            console.log('INFO: Destroing Flickity')
            flkty.destroy()
        }

        // Run lazy loader on mobile.
        if(typeof lazyLoadInstance === 'undefined') { 
            console.log('INFO: Running LazyLoad')

            lazyLoadInstance = new LazyLoad({
                elements_selector: ".project-carousel__image--mobile",
                threshold: 88,
                callback_loaded: (element) => {
                    element.parentNode.parentNode.classList.add('loaded')
                }
            });
        }
    }
})