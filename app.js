AOS.init({
  // Global settings:
  disable: "mobile", // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 600, // values from 0 to 3000, with step 50ms
  easing: "ease", // default easing for AOS animations
  once: true, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
})

const arrowLeft = document.querySelector("#left")
const arrowRight = document.querySelector("#right")
const radioSlider = document.querySelectorAll(".radio-slider")
const header = document.querySelector("header")
const showNav = document.querySelector(".open-nav")
const nav = document.querySelector("nav")
const ImgCart = document.querySelectorAll(".cart")

let heightOfS1 = 0 //height of first section
let numberOfSlide = 1 //SET slide


//on start
chechedInput() //change slide
showbck() //show contacts
navShow() //show nav

window.onresize = navShow
window.onresize = showbck
window.onscroll = navShow

showNav.onclick = () => {
	//show nav and chanche icon
  nav.classList.toggle("show")
  showNav.classList.toggle("closeNav")
}

arrowLeft.onclick = () => {
  //change slide -1
  if (numberOfSlide > 0) {
    numberOfSlide--
  } else {
    numberOfSlide = 2
  }
  chechedInput()
}

arrowRight.onclick = () => {
  //change slide +1
  if (numberOfSlide < 2) {
    numberOfSlide++
  } else {
    numberOfSlide = 0
  }
  chechedInput()
}

function chechedInput() {
  // set input wich works on slide
  radioSlider[numberOfSlide].checked = "checked"
}

function navShow() {
	//show nav when we are not in the top
  heightOfS1 = document.querySelector("#s1").clientHeight + 60
  if (window.pageYOffset > heightOfS1) {
    header.classList.add("headerFix")
  } else if (window.pageYOffset < 100) {
    header.classList.remove("headerFix")
    nav.classList.remove("show")
    showNav.classList.remove("closeNav")
  }
}

function showbck() {
	//show photos of team in the backround
  if (window.innerWidth <= 550) {
    ImgCart.forEach((x) => {
      x.style.backgroundImage = `url('..${x.dataset.img}')`
    })
  } else {
    ImgCart.forEach((x) => {
      x.style.backgroundImage = "none"
    })
  }
}
