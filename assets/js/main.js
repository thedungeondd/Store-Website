// Main JavaScript file for The Dungeon Smoke Shop website

// DOM Content Loaded Event
document.addEventListener('DOMContentLoaded', function() {
    console.log('The Dungeon Smoke Shop website loaded successfully!');
    
    // Initialize all functionality
    initializeNavigation();
    initializeContactForm();
    initializeScrollEffects();
    initializeSlideshow();
});

// Mobile Navigation Toggle
function initializeNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', function() {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', function(event) {
            const isClickInsideNav = navMenu.contains(event.target) || hamburger.contains(event.target);
            
            if (!isClickInsideNav && navMenu.classList.contains('active')) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    }
}

// Contact Form Handling
function initializeContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const name = formData.get('name');
            const email = formData.get('email');
            const phone = formData.get('phone');
            const subject = formData.get('subject');
            const message = formData.get('message');
            
            // Basic form validation
            if (!name || !email || !subject || !message) {
                showNotification('Please fill in all required fields.', 'error');
                return;
            }
            
            if (!isValidEmail(email)) {
                showNotification('Please enter a valid email address.', 'error');
                return;
            }
            
            // Simulate form submission (replace with actual form handling)
            showNotification('Thank you for your message! We\'ll get back to you soon.', 'success');
            contactForm.reset();
        });
    }
}

// Email validation helper function
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <span>${message}</span>
        <button class="notification-close">&times;</button>
    `;
    
    // Add notification styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#4CAF50' : type === 'error' ? '#f44336' : '#2196F3'};
        color: white;
        padding: 15px 20px;
        border-radius: 5px;
        box-shadow: 0 2px 10px rgba(0,0,0,0.2);
        z-index: 10000;
        display: flex;
        align-items: center;
        gap: 10px;
        animation: slideInRight 0.3s ease;
        max-width: 300px;
    `;
    
    // Add close button styles
    const closeButton = notification.querySelector('.notification-close');
    closeButton.style.cssText = `
        background: none;
        border: none;
        color: white;
        font-size: 18px;
        cursor: pointer;
        padding: 0;
        margin-left: auto;
    `;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Close notification on button click
    closeButton.addEventListener('click', () => {
        notification.remove();
    });
    
    // Auto-remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.remove();
        }
    }, 5000);
}

// Scroll effects and animations
function initializeScrollEffects() {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Add scroll-based animations if IntersectionObserver is supported
    if ('IntersectionObserver' in window) {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);
        
        // Observe elements that should animate on scroll
        document.querySelectorAll('.feature-card, .category-card').forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(card);
        });
    }
}

// Header scroll effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(44, 24, 16, 0.95)';
    } else {
        header.style.background = 'var(--primary-color)';
    }
});

// Utility Functions

// Debounce function for performance optimization
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Format phone number (basic US format)
function formatPhoneNumber(phoneNumber) {
    const cleaned = phoneNumber.replace(/\D/g, '');
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
        return '(' + match[1] + ') ' + match[2] + '-' + match[3];
    }
    return phoneNumber;
}

// Gallery Slideshow Functionality
let currentSlideIndex = 0;
const galleryImages = [
    '../assets/images/Gallery/IMG_4056.JPG',
    '../assets/images/Gallery/IMG_4057.JPG',
    '../assets/images/Gallery/IMG_4059.JPG',
    '../assets/images/Gallery/IMG_4060.JPG',
    '../assets/images/Gallery/IMG_4061.JPG',
    '../assets/images/Gallery/IMG_4062.JPG',
    '../assets/images/Gallery/IMG_4063.JPG',
    '../assets/images/Gallery/IMG_4064.JPG',
    '../assets/images/Gallery/IMG_4065.JPG',
    '../assets/images/Gallery/IMG_4066.JPG',
    '../assets/images/Gallery/IMG_4067.JPG',
    '../assets/images/Gallery/IMG_4068.JPG',
    '../assets/images/Gallery/IMG_4069.JPG',
    '../assets/images/Gallery/IMG_4070.JPG',
    '../assets/images/Gallery/IMG_4071.JPG',
    '../assets/images/Gallery/IMG_4072.JPG',
    '../assets/images/Gallery/IMG_4073.JPG',
    '../assets/images/Gallery/IMG_4074.JPG',
    '../assets/images/Gallery/IMG_4075.JPG',
    '../assets/images/Gallery/IMG_4076.JPG',
    '../assets/images/Gallery/IMG_4077.JPG',
    '../assets/images/Gallery/IMG_4079.JPG',
    '../assets/images/Gallery/IMG_4080.JPG',
    '../assets/images/Gallery/IMG_4081.JPG',
    '../assets/images/Gallery/IMG_4082.JPG',
    '../assets/images/Gallery/IMG_4083.JPG',
    '../assets/images/Gallery/IMG_4084.JPG',
    '../assets/images/Gallery/IMG_4085.JPG',
    '../assets/images/Gallery/IMG_4086.JPG',
    '../assets/images/Gallery/IMG_4087.JPG',
    '../assets/images/Gallery/IMG_4088.JPG',
    '../assets/images/Gallery/IMG_4089.JPG',
    '../assets/images/Gallery/IMG_4090.JPG',
    '../assets/images/Gallery/IMG_4091.JPG',
    '../assets/images/Gallery/IMG_4092.JPG',
    '../assets/images/Gallery/IMG_4093.JPG'
];

function initializeSlideshow() {
    const slideshowContainer = document.getElementById('slideshow-container');
    const dotsContainer = document.getElementById('slideDots');
    const prevButton = document.querySelector('.arrow-left');
    const nextButton = document.querySelector('.arrow-right');

    console.log('Slideshow initialization:', {
        slideshowContainer,
        dotsContainer,
        prevButton,
        nextButton,
        imageCount: galleryImages.length
    });

    if (!slideshowContainer || !dotsContainer || !prevButton || !nextButton) {
        console.error('Missing required elements for slideshow');
        return;
    }

    // Create slides and dots
    slideshowContainer.innerHTML = '';
    dotsContainer.innerHTML = '';
    galleryImages.forEach((src, index) => {
        // Create slide element
        const slide = document.createElement('div');
        slide.className = 'slide';
        const img = document.createElement('img');
        img.src = src;
        img.alt = `Gallery image ${index + 1}`;
        slide.appendChild(img);
        slideshowContainer.appendChild(slide);

        // Create dot element
        const dot = document.createElement('button');
        dot.className = 'slide-dot';
        dot.type = 'button';
        dot.setAttribute('aria-label', `Go to slide ${index + 1}`);
        dot.addEventListener('click', () => showSlide(index));
        dotsContainer.appendChild(dot);
    });

    console.log('Created', galleryImages.length, 'slides');

    // Add event listeners for arrow buttons
    prevButton.addEventListener('click', () => {
        let newIndex = currentSlideIndex - 1;
        if (newIndex < 0) {
            newIndex = galleryImages.length - 1;
        }
        showSlide(newIndex);
    });

    nextButton.addEventListener('click', () => {
        let newIndex = currentSlideIndex + 1;
        if (newIndex >= galleryImages.length) {
            newIndex = 0;
        }
        showSlide(newIndex);
    });

    // Keyboard navigation support
    document.addEventListener('keydown', (event) => {
        if (document.querySelector('.gallery-showcase')) { // Only run on gallery page
            if (event.key === 'ArrowLeft') {
                prevButton.click();
            } else if (event.key === 'ArrowRight') {
                nextButton.click();
            }
        }
    });

    showSlide(0); // Show the first slide initially
}

function showSlide(n) {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.slide-dot');

    if (!slides.length || !dots.length) {
        return;
    }
    
    currentSlideIndex = n;

    slides.forEach((slide, index) => {
        slide.classList.toggle('active', index === n);
    });

    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === n);
    });
}

// Add animation CSS for notifications
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
`;
document.head.appendChild(style);