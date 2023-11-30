const slider = document.getElementById('slider');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');
let currentIndex = 0;

prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateSlider();
    }
});

nextButton.addEventListener('click', () => {
    if (currentIndex < slider.children.length - 1) {
        currentIndex++;
        updateSlider();
    }
});

function updateSlider() {
    const itemWidth = slider.children[0].offsetWidth;
    const containerWidth = slider.offsetWidth; 
    const maxIndex = slider.children.length - Math.floor(containerWidth / itemWidth);

    if (currentIndex > maxIndex) {
        currentIndex = maxIndex;
    }

    const translateX = -currentIndex * itemWidth; 
    slider.style.transform = `translateX(${translateX}px)`;
}

