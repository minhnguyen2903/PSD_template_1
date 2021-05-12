let sliderCount = 0;
let slider = document.querySelectorAll(".banner__img");

function prevSlide() {
    sliderCount++;
    if(sliderCount > 0) {
        sliderCount = -(slider.length - 1);
    }
    slider.forEach(item => {
        item.style.transform = `translateX(${sliderCount*100}%)`;
    });
}

function nextSlide() {
        sliderCount--;
        if(sliderCount < -(slider.length - 1) ) {
            sliderCount = 0;
        }
        slider.forEach(item => {
            item.style.transform = `translateX(${sliderCount*100}%)`;
        });
        console.log(sliderCount);
}

