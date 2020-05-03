/**
 * Simple mail protector.
 *
 * Converts <span class="contact-box__btn js-mailprotector">johndoe<span>at</span>gmail.com</span> 
 * to <a href="mailto:johndoe@gmail.com" class="contact-box__btn js-mailprotector">johndoe<span>@</span>gmail.com/span> 
 */
export default function () { 
    let elements = document.getElementsByClassName('js-mailprotector')

    for (const item of elements) {

        let classes = item.classList
        let linkElement = document.createElement('a')
        let address = item.innerHTML

        address = address.replace('<span>at</span>', '@')

        linkElement.classList.add(...classes, 'protected')
        linkElement.classList.remove('js-mailprotector')

        // This is rather nasty but kinda quick...
        linkElement.innerHTML = item.innerHTML.replace('<span>at</span>', '<span class="less-important">@</span>')
        linkElement.setAttribute('href', `mailto:${address}`)

        // Finally replace
        item.replaceWith(linkElement)

    }
};
