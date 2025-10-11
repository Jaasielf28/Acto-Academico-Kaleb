// Toggle carousel visibility
document.querySelector('.see-more').addEventListener('click', function() {
    const carouselContainer = document.querySelector('.carousel-container');
    const button = this;
    
    carouselContainer.classList.toggle('show');
    
    if (carouselContainer.classList.contains('show')) {
        button.innerHTML = `Ver Menos 
            <br>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" class="main-grid-item-icon" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
            <polyline points="18 15 12 9 6 15" />
            </svg>`;
    } else {
        button.innerHTML = `Ver Más 
            <br>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" class="main-grid-item-icon" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
            <polyline points="6 9 12 15 18 9" />
            </svg>`;
    }
});

// Carousel navigation
document.querySelector('.carousel-btn-prev').addEventListener('click', function() {
    const carousel = document.querySelector('.carousel');
    carousel.scrollBy({ left: -250, behavior: 'smooth' });
});

document.querySelector('.carousel-btn-next').addEventListener('click', function() {
    const carousel = document.querySelector('.carousel');
    carousel.scrollBy({ left: 250, behavior: 'smooth' });
});