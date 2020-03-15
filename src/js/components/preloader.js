// Hide preloader
export function hidePreloader() {
    let preloader = document.getElementById('preloader')

    preloader.addEventListener('transitionend', () => {
        console.log('Transition ended');
        preloader.setAttribute('aria-hidden', 'true')
    }, { once: true })

    preloader.querySelector(":first-child").classList.add("animate-hide")

    preloader.classList.add("hide")
}

// Show preloader
export function showPreloader() {
    let preloader = document.getElementById('preloader')
}