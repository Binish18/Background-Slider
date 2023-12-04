const body = document.body
const slides = document.querySelectorAll('.slide')
const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')


let activeSlide = 0 // to know where we are

rightBtn.addEventListener('click', () => {
    activeSlide++
  
    if (activeSlide > slides.length - 1) {
      activeSlide = 0
    }
  
    setBgToBody()
    setActiveSlide()
  })
  leftBtn.addEventListener('click', () => {
    activeSlide--
  
    if (activeSlide < 0) {
      activeSlide = slides.length - 1
    }
  
    setBgToBody()
    setActiveSlide()
  })
  
  setBgToBody()
  
function setBgToBody(){
    body.style.backgroundImage = slides[activeSlide].style.backgroundImage
    // image rakh de 

}

function setActiveSlide() {
    slides.forEach((slide) => slide.classList.remove('active'))
  
    slides[activeSlide].classList.add('active')
  }
// This function appears to be designed to set a specific slide as active while removing the 'active' class from all other slides