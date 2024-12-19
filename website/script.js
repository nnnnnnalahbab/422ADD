document.addEventListener('DOMContentLoaded', function() {
    // Fade-in Animations
    const faders = document.querySelectorAll('.fade-in');
    const options = { threshold: 0.1 };

    const appearOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        });
    }, options);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });

    // Hamburger Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Assign fixed quotes to Easter Eggs
    // Since quotes are now fixed in HTML, no need for randomization
    // Ensure tooltips are always on top by relying on CSS z-index
});
