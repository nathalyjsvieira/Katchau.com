/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

/* Menu show */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/* Menu hidden */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contato__form'),
    contactMessage = document.getElementById('contato-message')

const sendEmail = (e) => {
    e.preventDefault()

    // serviceID - templateID - #form - publicKey
    emailjs.sendForm('service_3s4pddy', 'template_7mhk2k7', '#contato-form', 'yuV1C8DZm9O7JoKUP')
        .then(() => {
            // Show sent message
            contactMessage.textContent = 'Mensagem enviada com sucesso!'
        }, () => {
            //Show error message
            contactMessage.textContent = 'Ocorreu um erro ao enviar sua mensagem'
        })
}

contactForm.addEventListener('submit', sendEmail)


/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
    this.scrollY >= 400 ? scrollUp.classList.add('show-scroll')
        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollDown = window.scrollY

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
            sectionsClass.classList.add('active-link')
        } else {
            sectionsClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: '2500',
    delay: 400,
})

sr.reveal('.home__data, .home__social, .contato__container, .footer__container')
sr.reveal('.home__image', { origin: 'bottom' })
sr.reveal('.carrinho__data, .project__data', { origin: 'left' })
sr.reveal('.carrinho__image, .project__content', { origin: 'right' })
sr.reveal('.workflow__card, .documents__card', { interval: 100 })

/*=============== DARK LIGHT THEME ===============*/ 