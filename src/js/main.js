/**
 * Common JS File (global functionality).
 * 
 * Please conform to ECMA rules:
 * @link https://devhints.io/es6
 * 
 * Please conform to JSDoc:
 * @link https://jsdoc.app/tags-param.html#examples
 */
import { hidePreloader, showPreloader } from './components/preloader'
import Menu from './components/menu'
import MediaWatcher from './components/mediawatcher'
import mailProtector from './components/mailprotector';

// Little hello world to test compilers/transpilers 

/** @var {string} greetingMessage */
let greetingMessage = "%cHello there! Want to hire me?\n Go to http://realhe.ro \n :)"

console.log(greetingMessage, 'background: #000; color: Yellow; font-size: 1.25em')


/**
 * Protect emails.
 */
mailProtector()

/**
 * Window onload.
 */
window.addEventListener('load', (event) => {

    // Hide preloader
    setTimeout( () => {
        hidePreloader()
    }, 1000)
    
    /** @var {object} menu */
    let menu;

    /**
     * Menu support.
     * Init on mobile, show in case of desktop media query.
     */
    MediaWatcher.addDynamicListener(item => { 
        if(item === 'xs' || item === 'sm') {
            if(typeof menu === 'undefined') {
                menu = new Menu
                menu.hide()
                menu.init()
            }
        } else {
            if(typeof menu !== 'undefined') { 
                menu.show()
            }
        }
    })
});