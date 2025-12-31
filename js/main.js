/* Main JS */

document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    const navLinksItems = document.querySelectorAll('.nav-link');

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            mobileMenuBtn.setAttribute('aria-expanded',
                navLinks.classList.contains('active'));

            // Icon toggle
            const icon = mobileMenuBtn.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    // Close mobile menu when clicking a link
    navLinksItems.forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                const icon = mobileMenuBtn.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    });

    // Reveal animations on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    // Experience Duration Calculator
    const startDate = new Date('2025-07-01');
    const currentDate = new Date();

    // Calculate total months
    let months = (currentDate.getFullYear() - startDate.getFullYear()) * 12;
    months -= startDate.getMonth();
    months += currentDate.getMonth();

    // Ensure minimum 1 month if started recently
    if (months <= 0) months = 0; // Or 1 depending on logic, but 0-indexed math usually needs adjustment.

    // Actually, distinct months calculation usually includes the starting month if at least started.
    // Let's stick to simple diff + 1 if we want inclusive "Jul to Jul is 1 month"? 
    // Usually "Jul - Present" (if Aug) is 1 mo. 
    // Let's refine:
    // Jul 2025 to Dec 2025 (current user date)
    // 2025-2025 = 0 years. 
    // Dec(11) - Jul(6) = 5.
    // So 5 months? Or 6?
    // User sample says "6 mos" for Jul-Present (assuming Dec/Jan). 
    // Jul, Aug, Sep, Oct, Nov, Dec = 6 months. So diff + 1.

    months += 1;

    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;

    let durationText = "";
    if (years > 0) {
        durationText += `${years} yr${years > 1 ? 's' : ''} `;
    }
    if (remainingMonths > 0) {
        durationText += `${remainingMonths} mo${remainingMonths > 1 ? 's' : ''}`;
    }

    const durationElement = document.getElementById('exp-duration-text');
    if (durationElement) {
        durationElement.textContent = durationText;
    }

    // Elements to animate
    document.querySelectorAll('.section-title, .service-card, .project-card, .about-text, .education-column, .contact-wrapper, .experience-card').forEach(el => {
        el.style.opacity = "0"; // Initial state
        observer.observe(el);
    });
});
