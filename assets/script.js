document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    
    menuToggle.addEventListener('click', function() {
        mobileMenu.classList.toggle('hidden');
        this.querySelector('i').classList.toggle('fa-bars');
        this.querySelector('i').classList.toggle('fa-times');
    });
    
    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('#mobile-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.add('hidden');
            menuToggle.querySelector('i').classList.add('fa-bars');
            menuToggle.querySelector('i').classList.remove('fa-times');
        });
    });
    
    // Back to top button
    const backToTopButton = document.getElementById('back-to-top');
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopButton.classList.remove('opacity-0', 'invisible');
            backToTopButton.classList.add('opacity-100', 'visible');
        } else {
            backToTopButton.classList.remove('opacity-100', 'visible');
            backToTopButton.classList.add('opacity-0', 'invisible');
        }
    });
    
    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Form submission
    const contactForm = document.getElementById('contact-form');
    const formSuccess = document.getElementById('form-success');
    const formError = document.getElementById('form-error');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Simulate form submission
        formSuccess.classList.add('hidden');
        formError.classList.add('hidden');
        
        // Here you would typically send the form data to a server
        // For this demo, we'll just show a success message
        setTimeout(function() {
            contactForm.reset();
            formSuccess.classList.remove('hidden');
            
            // Hide success message after 5 seconds
            setTimeout(function() {
                formSuccess.classList.add('hidden');
            }, 5000);
        }, 1000);
    });
    
    // Retro hover effects for buttons
    const retroButtons = document.querySelectorAll('.retro-btn');
    
    retroButtons.forEach(button => {
        button.addEventListener('mousedown', function() {
            this.style.transform = 'translate(2px, 2px)';
            this.style.boxShadow = '2px 2px 0 #292f36';
        });
        
        button.addEventListener('mouseup', function() {
            this.style.transform = 'translate(-2px, -2px)';
            this.style.boxShadow = '4px 4px 0 #292f36';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = '';
            this.style.boxShadow = '';
        });
    });
    
    // Add flicker effect to elements with the flicker class
    const flickerElements = document.querySelectorAll('.flicker');
    
    flickerElements.forEach(el => {
        setInterval(() => {
            el.style.opacity = (0.8 + Math.random() * 0.2).toFixed(2);
        }, 100);
    });
});