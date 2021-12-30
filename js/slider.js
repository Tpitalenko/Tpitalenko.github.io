let offset = 0;
const sliderLine = document.querySelector('.slider-line');
let imageWidth = sliderLine.offsetWidth/3;

// document.querySelector('.sliderNext').addEventListener('click', )

function imageSlide() {
    offset = offset + imageWidth;

    if (offset > imageWidth*2) {
        offset = 0;
    }

    sliderLine.style.left = -offset + 'px';
}

setInterval(imageSlide, 10000)
