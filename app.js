// lenis
const lenis = new Lenis()

lenis.on('scroll', e => {})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

// tilt

VanillaTilt.init(document.querySelector('.jotnarIceImg'), {
  max: 25,
  speed: 400,
})

//It also supports NodeList
VanillaTilt.init(document.querySelectorAll('.your-element'))

// read more
const readMoreBtn = document.querySelector('.read-more')
const readMoreText = document.querySelector('.read-more-text')
readMoreBtn.addEventListener('click', function () {
  readMoreText.classList.add('show-read-more')
  readMoreBtn.style.display = 'none'
})

// sliders
const sliders = document.querySelectorAll('.slide-in')

const appearOptions = {
  threshold: 0,
  rootMargin: '0px 0px -80px 0px',
}

const appearOnScroll = new IntersectionObserver(function (
  entries,
  appearOnScroll
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return
    } else {
      entry.target.classList.add('appear')
      appearOnScroll.unobserve(entry.target)
    }
  })
},
appearOptions)

sliders.forEach(slider => {
  appearOnScroll.observe(slider)
})

// preloader
const preLoader = document.querySelector('#preloader-home')
const navLogo = document.querySelector('.navLogoImg')
const navLinks = document.querySelector('.navLinks')
const navSocialLinks = document.querySelector('.navSocialLinks')
const headerLogoImg = document.querySelector('.headerLogoImg')
const headerTitle = document.querySelector('.headerTitle')
const blueText = document.querySelector('.blueText')
const headerSubTitle = document.querySelector('.headerSubTitle')
const headerSignupForm = document.querySelector('.headerSignupForm')
const headerBarImg = document.querySelector('.headerBarImg')

const preloaderFunc = function () {
  preLoader.style.display = 'flex'
  preLoader.style.justifyContent = 'center'
  preLoader.style.alignItems = 'center'

  const preloaderInterval = setInterval(() => {
    preLoader.style.display = 'none'
    navLogo.classList.add('navLogoImgSlideUp')
    navLinks.classList.add('navLinksSlideUp')
    navSocialLinks.classList.add('navSocialLinksSlideUp')
    headerLogoImg.classList.add('headerLogoImgSlideUp')
    headerTitle.classList.add('headerTitleSlideUp')
    blueText.classList.add('blueTextSlideUp')
    headerSubTitle.classList.add('headerSubTitleSlideUp')
    headerSignupForm.classList.add('headerSignupFormSlideUp')
    headerBarImg.classList.add('headerBarImgSlideUp')

    // add classes to the elements here
  }, 5000)
}

window.addEventListener('load', function () {
  if (sessionStorage.getItem('dontload') === null) {
    sessionStorage.setItem('dontload', true)
    preloaderFunc()
    sessionStorage.setItem('dontload', true)
  }

  preloaderFunc()
})

window.onbeforeunload = function () {
  localStorage.removeItem('dontload')
}
