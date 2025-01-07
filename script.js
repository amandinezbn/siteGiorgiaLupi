let currentIndex = 0;
const imagesContainer = document.querySelector('.images-container');
const images = document.querySelectorAll('.images-container img');
const totalImages = images.length;

function moveSlide(direction) {
    currentIndex += direction;

    // Réinitialiser l'index si nécessaire
    if (currentIndex < 0) {
        currentIndex = totalImages - 1;  // Dernière image
    } else if (currentIndex >= totalImages) {
        currentIndex = 0;  // Première image
    }

    // Déplacer l'ensemble des images en fonction de l'index
    const newTransformValue = -currentIndex * 100;
    imagesContainer.style.transform = `translateX(${newTransformValue}%)`;
}