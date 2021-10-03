let burger = document.querySelector(".burger");
let sitenav = document.querySelector(".sitenav");
let body = document.querySelector('.page__body');

burger.addEventListener("click", () => {
  sitenav.classList.toggle('show')
  body.classList.toggle('overflow')
})

let slider = document.querySelector(".slider")
let slides = document.querySelectorAll('.slider__item');
let sliderWrapper = document.querySelector(".slider__inner");
let width = window.getComputedStyle(sliderWrapper).width;
let slidesField = document.querySelector('.slider__list');
let offset = 0;
slidesField.style.width = 100 * slides.length + "%";
slidesField.style.display = "flex";
slidesField.style.transition = "0.5s ease";
sliderWrapper.style.overflow = "hidden"

slides.forEach(slide => {
  slide.style.width = width;
})


let indicator = document.createElement('ol'),
  dots = [];

indicator.style.cssText = `
    display: flex;
    align-items:center;
    justify-content: center;
    margin:0;
    list-style: none;
    padding:0;
  `

slider.append(indicator)

for (let i = 0; i < slides.length; i++) {
  const dot = document.createElement('li')
  dot.setAttribute('data-slide-to', i + 1)
  dot.style.cssText = `
      flex: 0 1 auto;
      width: 30px;
      height: 4px;
      margin: 0 3px;
      cursor: pointer;
      background-color: #00285B;
      opacity: .5;
      transform: opacity .6s ease;
    `
  if (i == 0) {
    dot.style.opacity = 1
  }
  indicator.append(dot)
  dots.push(dot)
}


dots.forEach(dot => {
  dot.addEventListener('click', (e) => {
    const slideTo = e.target.getAttribute('data-slide-to')

    offset = +width.slice(0, width.length - 2) * (slideTo - 1)
    slidesField.style.transform = `translateX(-${offset}px)`

    dots.forEach(dot => dot.style.opacity = '.5');
  })
})

let newsModal = document.querySelector(".news__modal")
let links = document.querySelectorAll('.slider__link')
let closeModal = document.querySelector('.close-modal')
links.forEach(link => {
  link.addEventListener('click', () => {
    newsModal.classList.add('modal-show');
    body.classList.toggle('overflow')
  })
})
closeModal.addEventListener('click', () => {
  newsModal.classList.remove('modal-show');
  body.classList.toggle('overflow')
})
