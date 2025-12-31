/* Scroll Handling */

// Navbar Scroll Effect
const navbar = document.querySelector('.navbar');
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.boxShadow = "0 10px 30px -10px rgba(2, 12, 27, 0.7)";
        navbar.style.height = "70px"; // Shrink slightly
    } else {
        navbar.style.boxShadow = "none";
        navbar.style.height = "80px";
    }

    // Hide/Show navbar on scroll (optional, current design is fixed)
    /*
    if (window.scrollY > lastScrollY && window.scrollY > 100) {
        navbar.style.transform = "translateY(-100%)";
    } else {
        navbar.style.transform = "translateY(0)";
    }
    lastScrollY = window.scrollY;
    */
});

// Active Link Highlighting
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (scrollY >= (sectionTop - 150)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});
