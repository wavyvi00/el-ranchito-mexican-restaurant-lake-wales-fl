document.addEventListener('DOMContentLoaded', () => {
    
    // --- Scroll Reveal Animation ---
    const revealElements = document.querySelectorAll('.scroll-reveal');

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Reveal only once
            }
        });
    }, {
        root: null,
        threshold: 0.15, // Trigger when 15% of element is visible
        rootMargin: "0px"
    });

    revealElements.forEach(el => revealObserver.observe(el));


    // --- Advanced Parallax (Floating Elements) ---
    // This looks for elements with .parallax-layer and data-speed attribute
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxLayers = document.querySelectorAll('.parallax-layer');
        
        parallaxLayers.forEach(layer => {
            const speed = layer.getAttribute('data-speed');
            // Check if element is in view before animating to save performance? 
            // For Hero usually it's at top so we just move it.
            if(speed) {
                const yPos = -(scrolled * speed);
                layer.style.transform = `translateY(${yPos}px)`;
            }
        });
    });

    // --- Mobile Menu Toggle ---
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            // Basic simple toggle for now, would need CSS class .active to show it
            if(navLinks.classList.contains('active')) {
                navLinks.style.display = 'flex';
                navLinks.style.flexDirection = 'column';
                navLinks.style.position = 'absolute';
                navLinks.style.top = '100%';
                navLinks.style.left = '0';
                navLinks.style.width = '100%';
                navLinks.style.background = 'white';
                navLinks.style.padding = '2rem';
                navLinks.style.boxShadow = '0 5px 10px rgba(0,0,0,0.1)';
            } else {
                navLinks.style.display = 'none';
            }
        });
    }

});
