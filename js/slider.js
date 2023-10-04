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
    const itemWidth = slider.children[0].offsetWidth; // Get the width of each item
    const containerWidth = slider.offsetWidth; // Get the width of the slider container
    const maxIndex = slider.children.length - Math.floor(containerWidth / itemWidth); // Calculate the maximum index to show

    if (currentIndex > maxIndex) {
        currentIndex = maxIndex;
    }

    const translateX = -currentIndex * itemWidth; 
    slider.style.transform = `translateX(${translateX}px)`;
}

