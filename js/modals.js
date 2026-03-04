document.addEventListener('DOMContentLoaded', () => {
  const contactButtons = document.querySelectorAll('.bookNow'); 
  const contactModal = document.getElementById('contactModalMain');
  const closeModal = document.getElementById('closeModal');

  contactButtons.forEach(button => {
    button.addEventListener('click', () => {
      contactModal.classList.add('show');
    });
  });

  closeModal.addEventListener('click', () => {
    contactModal.classList.remove('show');
  });

  contactModal.addEventListener('click', (e) => {
    if (e.target === contactModal) {
      contactModal.classList.remove('show');
    }
  });

  const contactOptions = document.getElementById('contactOptions');
  const whatsappBtn = document.getElementById('whatsappBtn');
  const backBtn = document.getElementById('backBtn');

  // WhatsApp button - redirect to WhatsApp
  whatsappBtn.addEventListener('click', function() {
    
    const phoneNumber = '523329913759'; 
    const message = encodeURIComponent('Hola, confirmo mi asistencia.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  });

  const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

document.querySelectorAll('.scroll-animate').forEach(el => observer.observe(el));
});

