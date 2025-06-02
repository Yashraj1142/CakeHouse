const slides = document.querySelectorAll(".slide")

slides.forEach(
    (slide, index) => {
        slide.style.left = `${index * 100}%`
    }
)

var counter = 0

const slideImg = () => {
    slides.forEach(
        (slide) => {
            slide.style.transform = `translateX(-${counter * 100}%)`
        }
    )
}

const goNext = () => {
    counter++
    if (counter === slides.length) {
        counter = 0;
    }
    slideImg()
}

const goPrev = () => {
    counter--;
    if (counter < 0) {
        counter = slides.length - 1;
    }
    slideImg();
}