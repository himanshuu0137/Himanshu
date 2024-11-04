
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.querySelector('.contact-form form');
    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (name === '' || email === '' || message === '') {
            alert('Please fill in all fields.');
            return;
        }

        alert('Thank you for contacting us, ' + name + '! We will get back to you shortly.');

        contactForm.reset();
    });

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('click', function () {
            const modal = document.createElement('div');
            modal.style.position = 'fixed';
            modal.style.top = '0';
            modal.style.left = '0';
            modal.style.width = '100%';
            modal.style.height = '100%';
            modal.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
            modal.style.display = 'flex';
            modal.style.alignItems = 'center';
            modal.style.justifyContent = 'center';
            modal.style.zIndex = '1000';

            const modalImage = document.createElement('img');
            modalImage.src = this.src;
            modalImage.alt = this.alt;
            modalImage.style.maxWidth = '90%';
            modalImage.style.maxHeight = '90%';
            modalImage.style.boxShadow = '0 0 10px #fff';

            modal.appendChild(modalImage);

            modal.addEventListener('click', function () {
                document.body.removeChild(modal);
            });

            document.body.appendChild(modal);
        });
    });

    const header = document.querySelector('header');
    window.addEventListener('scroll', function () {
        const scrollPosition = window.scrollY;
        header.style.backgroundColor = `rgba(0, 0, 0, ${Math.min(scrollPosition / 300, 0.8)})`;
        header.style.transition = 'background-color 0.3s';
    });
});
