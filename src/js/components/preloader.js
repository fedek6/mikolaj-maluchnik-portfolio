// Hide preloader
export function hidePreloader() {
    let preloader = document.getElementById('preloader')
    let body = document.getElementsByTagName('body')[0]

    preloader.addEventListener('transitionend', () => {
        console.log('Transition ended');
        preloader.setAttribute('aria-hidden', 'true')
    }, { once: true })

    body.setAttribute('aria-busy', 'false')

    preloader.querySelector(":first-child").classList.add("animate-hide")

    preloader.classList.add("hide")
}

// Show preloader
export function showPreloader() {
    let preloader = document.getElementById('preloader')
    let body = document.getElementsByTagName('body')[0]

    body.setAttribute('aria-busy', 'true')
}