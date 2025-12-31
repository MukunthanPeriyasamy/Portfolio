/* Form Handling */

const contactForm = document.getElementById('contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Basic validation
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (!name || !email || !message) {
            alert('Please fill in all fields.');
            return;
        }

        // Simulate sending
        const originalBtnText = contactForm.querySelector('button').innerText;
        contactForm.querySelector('button').innerText = 'Sending...';
        contactForm.querySelector('button').disabled = true;

        setTimeout(() => {
            alert(`Thanks ${name}! Your message has been sent (simulated).`);
            contactForm.reset();
            contactForm.querySelector('button').innerText = 'Message Sent!';

            setTimeout(() => {
                contactForm.querySelector('button').innerText = originalBtnText;
                contactForm.querySelector('button').disabled = false;
            }, 3000);
        }, 1500);

        // Here you would typically send data to a backend or service like Formspree
        // fetch('your-endpoint', { method: 'POST', body: ... })
    });
}
