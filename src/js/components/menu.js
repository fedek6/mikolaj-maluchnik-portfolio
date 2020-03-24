/**
 * @property {object} btnCloseMenu
 * @property {object} btnShowMenu
 * @property {object} mainMenu
 */
export default class { 
    constructor() {
        this.btnCloseMenu = document.getElementsByClassName('js-close-menu')[0]
        this.btnShowMenu = document.getElementsByClassName('js-show-menu')[0]

        // Let's get main menu container.
        let menuSelector = this.btnCloseMenu.getAttribute('aria-controls')

        this.mainMenu = document.getElementById(menuSelector)
    }

    /**
     * Hide menu.
     */
    hide() {
        this.mainMenu.setAttribute('aria-hidden', 'true')
    }

    /**
     * Show menu.
     */
    show() {
        this.mainMenu.setAttribute('aria-hidden', 'false')
    }

    /**
     * Init UX elements.
     */
    init() {
        let self = this;

        this.btnShowMenu.addEventListener('touchend', event => {
            event.stopPropagation()
            event.preventDefault()
            self.show()
        })

        this.btnShowMenu.addEventListener('click', event => { 
            event.stopPropagation()
            event.preventDefault()
            self.show()
        })

        this.btnCloseMenu.addEventListener('touchend', event => {
            event.stopPropagation()
            event.preventDefault()
            self.hide()
        })

        this.btnCloseMenu.addEventListener('click', event => {
            event.stopPropagation()
            event.preventDefault()
            self.hide()
        }) 
    }
}